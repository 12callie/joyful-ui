<script lang="ts" setup>
import Button from '../lib/Button.vue'
import { ref } from 'vue'

const loadingRef = ref(false)

function handleClick () {
  loadingRef.value = true
  setTimeout(() => {
    loadingRef.value = false
  }, 2000)
}
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
  <div>
    <div>尺寸</div>
    <Button size="tiny">tiny</Button>
    <Button size="small">small</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  </div>
  <div>
    <div>文本按钮</div>
    <Button text>这是一个文本按钮</Button>
  </div>
  <div>
    <div>禁用</div>
    <Button disabled>不许点</Button>
  </div>
  <div>
    <div>加载中</div>
    <Button class="j-loadingButton" loading>加载中</Button>
    <Button :loading="loadingRef" @click="handleClick">点我</Button>
  </div>
</template>

<style scoped lang="scss"></style>