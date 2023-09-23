<template>
  <Teleport to="body">
    <Transition name="j-dialog-transition">
      <div
          v-if="dialogVisible"
          class="j-dialog-overlay"
          @click="onClickOverlay"
      >
        <div
            :class="{ [`j-dialog-theme-${theme}`]: theme }"
            class="j-dialog-wrapper"
        >
          <header>
            <div class="j-dialog-svg">
              <svg v-if="theme === 'confirm'" class="icon">
                <use xlink:href="#icon-warn"></use>
              </svg>
              <svg v-if="theme === 'success'" class="icon">
                <use xlink:href="#icon-success"></use>
              </svg>
              <svg v-if="theme === 'error'" class="icon">
                <use xlink:href="#icon-close"></use>
              </svg>
            </div>

            <span>{{ title }}</span>
            <svg class="icon j-dialog-svg-close" @click="closeDialog">
              <use xlink:href="#icon-close"></use>
            </svg>
          </header>
          <main>{{ content }}</main>
          <footer>
            <Button v-if="theme === 'confirm'" @click="cancel">
              {{ negativeText }}
            </Button>
            <Button v-if="theme === 'error'" theme="error" @click="ok">
              {{ positiveText }}
            </Button>
            <Button v-else theme="primary" @click="ok">
              {{ positiveText }}
            </Button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import Button from './Button.vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'confirm',
  },
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  ok: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
  title: {
    type: String,
    default: '确认',
  },
  content: {
    type: String,
    default: '是否确定？',
  },
  negativeText: {
    type: String,
    default: '取消',
  },
  positiveText: {
    type: String,
    default: '确认',
  },
})
const emit = defineEmits(['update:dialogVisible'])
const closeDialog = () => {
  emit('update:dialogVisible', false)
}
const onClickOverlay = () => {
  if (props.closeOnClickOverlay) {
    closeDialog()
  }
}
const cancel = () => {
  props.cancel?.()
  closeDialog()
}
const ok = () => {
  if (props.ok?.() !== false) {
    closeDialog()
  }
}
</script>

<style lang="scss">
$theme-color: #18a058;
$error-color: #d03050;

.j-dialog-overlay {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: fade_out(#999, 0.4);

  .j-dialog-wrapper {
    position: absolute;
    z-index: 11;
    top: 50%;
    left: 50%;
    width: 75%;
    max-width: 420px;
    max-height: 90%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 5px fade_out(#999, 0.1);

    .icon {
      width: 20px;
      height: 20px;
    }

    > header {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;

      > span {
        flex-grow: 1;
        margin-right: auto;
        margin-left: 8px;
      }

      > .j-dialog-svg {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        justify-content: center;
        padding: 4px;
        color: #fff;
        border-radius: 50%;
        background: $theme-color;
      }

      > .j-dialog-svg-close {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }

    > main {
      display: -webkit-box;
      overflow: hidden;
      margin: 12px 16px;
      text-overflow: ellipsis;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }

    > footer {
      padding: 12px 16px;
      text-align: right;
    }

    &.j-dialog-theme-success {
    }

    &.j-dialog-theme-error {
      .j-dialog-svg {
        background: $error-color;
      }
    }
  }
}

.j-dialog-transition-enter-active,
.j-dialog-transition-leave-active {
  transition: opacity 0.3s ease;
}

.j-dialog-transition-enter-from,
.j-dialog-transition-leave-to {
  opacity: 0;
}
</style>
