<script lang="ts" setup>
import Demo from '../components/Demo.vue'
import Message1Demo from '../components/Message1.demo.vue'
import Message2Demo from '../components/Message2.demo.vue'
import Message3Demo from '../components/Message3.demo.vue'
import { ref } from 'vue'

const message2Description = ref('设定 Message 的持续时间。')
</script>

<template>
  <div class="button-demos">
    <h1 class="component-demos-h1">信息 Message</h1>
    <p>在页面中间弹出提示，用于消息通知、加载提示、操作结果提示等场景。</p>
    <h2 class="component-demos-h2">演示</h2>
    <div class="component-demos">
      <Demo :component="Message1Demo" />
      <Demo :component="Message2Demo" :description="message2Description" />
      <Demo :component="Message3Demo" />
    </div>
  </div>
</template>
