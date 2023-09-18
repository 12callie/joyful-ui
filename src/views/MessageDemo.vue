<script lang="ts" setup>
import Demo from '../components/Demo.vue'
import Message1Demo from '../components/Message1.demo.vue'

</script>

<template>
  <div class="button-demos">
    <h1 class="j-component-demos-h1">信息 Message</h1>
    <p>在页面中间弹出提示，用于消息通知、加载提示、操作结果提示等场景。</p>
    <h2 class="j-component-demos-h2">演示</h2>
    <div class="j-component-demos">
      <Demo :component="Message1Demo" />
    </div>
  </div>
</template>
