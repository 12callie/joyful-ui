<script lang="ts" setup>
import Button from '../lib/Button.vue'

</script>


<template>
  <h1>按钮 Button</h1>
  <div>
    <div>基础用法</div>
    <div>
      <Button>Default</Button>
      <Button theme="primary">Primary</Button>
      <Button theme="info">Info</Button>
      <Button theme="success">Success</Button>
      <Button theme="warning">Warning</Button>
      <Button theme="error">Error</Button>
    </div>
  </div>
  <div>
    <div>虚线按钮</div>
    <Button dashed>Default</Button>
    <Button dashed theme="primary">Primary</Button>
    <Button dashed theme="info">Info</Button>
    <Button dashed theme="success">Success</Button>
    <Button dashed theme="warning">Warning</Button>
    <Button dashed theme="error">Error</Button>
  </div>
</template>

<style scoped lang="scss"></style>