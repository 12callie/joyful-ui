<script lang="ts" setup>
import Button from '../lib/Button.vue'

</script>


<template>
  <h1>按钮 Button</h1>
  <h2>基础用法</h2>
  <div>
    <Button>Default</Button>
    <Button theme="primary">Primary</Button>
    <Button theme="info">Info</Button>
    <Button theme="success">Success</Button>
    <Button theme="warning">Warning</Button>
    <Button theme="error">Error</Button>
  </div>
</template>

<style scoped lang="scss"></style>