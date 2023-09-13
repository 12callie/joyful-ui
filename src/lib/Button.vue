<script lang="ts" setup>


</script>


<template>
  <button class="j-button">
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
}
</style>