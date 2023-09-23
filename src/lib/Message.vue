<script lang="ts" setup>
import { Theme } from './type'

interface MessageProps {
  theme: Theme
  textMessage: string
}

const props = withDefaults(defineProps<MessageProps>(), {
  theme: 'info',
  textMessage: '提示',
})
</script>

<template>
  <div class="j-message">
    <div class="j-message-icon">
      <svg v-if="theme === 'info'" class="icon info">
        <use xlink:href="#icon-warn"></use>
      </svg>
      <svg v-if="theme === 'error'" class="icon error">
        <use xlink:href="#icon-close"></use>
      </svg>
      <svg v-if="theme === 'warning'" class="icon warn">
        <use xlink:href="#icon-warn"></use>
      </svg>
      <svg v-if="theme === 'success'" class="icon success">
        <use xlink:href="#icon-success"></use>
      </svg>
      <span v-if="theme ==='loading'" class="j-message-loadingIndicator"></span>
    </div>
    <p class="j-message-text"> {{ textMessage }}</p>
  </div>
</template>

<style lang="scss">
$theme-color: #18a058;
$info-color: #2080f0;
$warning-color: #f0a020;
$error-color: #d03050;
.j-message {
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  max-width: 60vw;
  padding: 10px 20px;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);


  .j-message-icon {
    margin-right: 8px;

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;

      &.info {
        background-color: $info-color;
      }

      &.error {
        background-color: $error-color;
      }

      &.warn {
        background-color: $warning-color;
      }

      &.success {
        background-color: $theme-color;
      }
    }

    .j-message-loadingIndicator {
      display: block;
      width: 14px;
      height: 14px;
      animation: j-loading-spin 1s infinite linear;
      border: 2px solid $theme-color;
      border-top-color: transparent;
      border-radius: 50%;
    }
  }

  .j-message-text {
    font-size: 14px;
    line-height: 24px;
    white-space: pre-wrap;
  }
}
</style>
