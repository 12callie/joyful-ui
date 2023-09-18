<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'default',
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
  },
  text: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
const classes = computed(() => {
  return {
    [`j-button-theme-${props.theme}`]: props.theme,
    [`j-button-dashed`]: props.dashed,
    [`j-button-size-${props.size}`]: props.size,
    [`j-button-text`]: props.text,
    [`j-button-loading`]: props.loading,
  }
})
</script>


<template>
  <button :class="classes" :disabled="disabled || loading" class="j-button">
    <span></span>
    <span v-if="loading" class="j-button-loadingIndicator"></span>
    <slot />
  </button>
</template>


<style lang="scss">
$theme-color: #18a058;
$info-color: #2080f0;
$warning-color: #f0a020;
$error-color: #d03050;
.j-button {
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 36px;
  margin: 8px 12px 8px 0;
  padding: 0 14px;
  cursor: pointer;
  transition: all 250ms;
  white-space: nowrap;
  border: 1px solid rgb(224, 224, 230);
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  &:hover,
  &:focus {
    color: $theme-color;
    border-color: $theme-color;
  }

  &:focus {
    outline: none;
  }

  &.j-button-theme-primary {
    color: #fff;
    background: $theme-color;

    &:hover,
    &:focus {
      border-color: lighten($theme-color, 5%);
      background: lighten($theme-color, 5%);
    }
  }

  &.j-button-theme-info {
    color: #fff;
    background: $info-color;

    &:hover,
    &:focus {
      border-color: lighten($info-color, 5%);
      background: lighten($info-color, 5%);
    }
  }

  &.j-button-theme-success {
    color: #fff;
    background: $theme-color;

    &:hover,
    &:focus {
      border-color: lighten($theme-color, 5%);
      background: lighten($theme-color, 5%);
    }
  }

  &.j-button-theme-warning {
    color: #fff;
    background: $warning-color;

    &:hover,
    &:focus {
      border-color: lighten($warning-color, 5%);
      background: lighten($warning-color, 5%);
    }
  }

  &.j-button-theme-error {
    color: #fff;
    background: $error-color;

    &:hover,
    &:focus {
      border-color: lighten($error-color, 5%);
      background: lighten($error-color, 5%);
    }
  }

  &.j-button-dashed {
    border-style: dashed;

    &.j-button-theme-primary {
      color: $theme-color;
      border-color: $theme-color;
      background: #fff;

      &:hover,
      &:focus {
        color: lighten($theme-color, 10%);
        border-color: lighten($theme-color, 10%);
      }
    }

    &.j-button-theme-info {
      color: $info-color;
      border-color: $info-color;
      background: #fff;

      &:hover,
      &:focus {
        color: lighten($info-color, 10%);
        border-color: lighten($info-color, 10%);
      }
    }

    &.j-button-theme-success {
      color: $theme-color;
      border-color: $theme-color;
      background: #fff;

      &:hover,
      &:focus {
        color: lighten($theme-color, 10%);
        border-color: lighten($theme-color, 10%);
      }
    }

    &.j-button-theme-warning {
      color: $warning-color;
      border-color: $warning-color;
      background: #fff;

      &:hover,
      &:focus {
        color: lighten($warning-color, 10%);
        border-color: lighten($warning-color, 10%);
      }
    }

    &.j-button-theme-error {
      color: $error-color;
      border-color: $error-color;
      background: #fff;

      &:hover,
      &:focus {
        color: lighten($error-color, 10%);
        border-color: lighten($error-color, 10%);
      }
    }

    &[disabled] {
      cursor: not-allowed;
      color: rgb(224, 224, 230);
      border-color: rgb(224, 224, 230);

      background: #fff;

      &:hover,
      &:focus {
        color: rgb(224, 224, 230);
        border-color: rgb(224, 224, 230);
        background: #fff;
      }
    }
  }

  &.j-button-size-tiny {
    font-size: 10px;
    height: 26px;
    padding: 0 6px;
  }

  &.j-button-size-small {
    font-size: 12px;
    height: 30px;
    padding: 0 10px;
  }

  &.j-button-size-large {
    font-size: 16px;
    height: 42px;
    padding: 0 18px;
  }

  &.j-button-text {
    border: none;
    box-shadow: none;
  }

  &[disabled] {
    cursor: not-allowed;
    color: rgb(224, 224, 230);
    border-color: rgb(224, 224, 230);

    background: #fff;

    &:hover,
    &:focus {
      color: rgb(224, 224, 230);
      border-color: rgb(224, 224, 230);
      background: #fff;
    }
  }

  &.j-button-loading {
    cursor: wait;
    color: lighten($theme-color, 10%);
    border-color: lighten($theme-color, 10%);

    &[disabled] {
      &:hover,
      &:focus {
        color: lighten($theme-color, 10%);
        border-color: lighten($theme-color, 10%);
      }
    }
  }

  .j-button-loadingIndicator {
    width: 14px;
    height: 14px;
    margin-right: 4px;
    animation: j-loading-spin 1s infinite linear;
    border: 2px solid $theme-color;
    border-top-color: transparent;
    border-radius: 50%;
  }
}
</style>