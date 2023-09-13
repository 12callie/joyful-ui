<script lang="ts" setup>
import { defineProps, computed } from 'vue'

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
})
const classes = computed(() => {
  return {
    [`j-button-theme-${props.theme}`]: props.theme,
    [`j-button-dashed`]: props.dashed,
    [`j-button-size-${props.size}`]: props.size,
    [`j-button-text`]: props.text,
  }
})

</script>


<template>
  <button class="j-button" :class="classes">
    <slot></slot>
  </button>
</template>

<style lang="scss">
$theme-color: #18a058;
$info-color: #2080f0;
$warning-color: #f0a020;
$error-color: #d03050;
.j-button {
  font-size: 14px;
  height: 36px;
  cursor: pointer;
  background: #fff;
  border: 1px solid rgb(224, 224, 230);
  border-radius: 4px;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  min-width: 0;
  padding: 0 14px;
  margin: 8px 12px 8px 0;
  transition: all 250ms;

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
      background: lighten($theme-color, 5%);
      border-color: lighten($theme-color, 5%);
    }
  }

  &.j-button-theme-info {
    color: #fff;
    background: $info-color;

    &:hover,
    &:focus {
      background: lighten($info-color, 5%);
      border-color: lighten($info-color, 5%);
    }
  }

  &.j-button-theme-success {
    color: #fff;
    background: $theme-color;

    &:hover,
    &:focus {
      background: lighten($theme-color, 5%);
      border-color: lighten($theme-color, 5%);
    }
  }

  &.j-button-theme-warning {
    color: #fff;
    background: $warning-color;

    &:hover,
    &:focus {
      background: lighten($warning-color, 5%);
      border-color: lighten($warning-color, 5%);
    }
  }

  &.j-button-theme-error {
    color: #fff;
    background: $error-color;

    &:hover,
    &:focus {
      background: lighten($error-color, 5%);
      border-color: lighten($error-color, 5%);
    }
  }

  &.j-button-dashed {
    border-style: dashed;

    &.j-button-theme-primary {
      background: #fff;
      color: $theme-color;
      border-color: $theme-color;

      &:hover,
      &:focus {
        border-color: lighten($theme-color, 10%);
        color: lighten($theme-color, 10%);
      }
    }

    &.j-button-theme-info {
      background: #fff;
      color: $info-color;
      border-color: $info-color;

      &:hover,
      &:focus {
        border-color: lighten($info-color, 10%);
        color: lighten($info-color, 10%);
      }
    }

    &.j-button-theme-success {
      background: #fff;
      color: $theme-color;
      border-color: $theme-color;

      &:hover,
      &:focus {
        border-color: lighten($theme-color, 10%);
        color: lighten($theme-color, 10%);
      }
    }

    &.j-button-theme-warning {
      background: #fff;
      color: $warning-color;
      border-color: $warning-color;

      &:hover,
      &:focus {
        border-color: lighten($warning-color, 10%);
        color: lighten($warning-color, 10%);
      }
    }

    &.j-button-theme-error {
      background: #fff;
      color: $error-color;
      border-color: $error-color;

      &:hover,
      &:focus {
        border-color: lighten($error-color, 10%);
        color: lighten($error-color, 10%);
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

}

</style>