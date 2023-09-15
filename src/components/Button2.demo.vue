<demo>虚线按钮</demo>
<script lang="ts" setup>
import Button from '../lib/Button.vue'
</script>

<template>
  <Button dashed>Default</Button>
  <Button dashed theme="primary">Primary</Button>
  <Button dashed theme="info">Info</Button>
  <Button dashed theme="success">Success</Button>
  <Button dashed theme="warning">Warning</Button>
  <Button dashed theme="error">Error</Button>
</template>