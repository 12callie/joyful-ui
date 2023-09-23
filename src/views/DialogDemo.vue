<script lang="ts" setup>
import { ref } from 'vue'
import Demo from '../components/Demo.vue'
import Dialog1Demo from '../components/Dialog1.demo.vue'
import Dialog2Demo from '../components/Dialog2.demo.vue'
import Dialog3Demo from '../components/Dialog3.demo.vue'

const dialog2Description = ref('调用一个函数就可以打开对话框了。')
</script>

<template>
  <div class="button-demos">
    <h1 class="component-demos-h1">对话框 Dialog</h1>
    <p>弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。</p>
    <h2 class="component-demos-h2">演示</h2>
    <div class="component-demos">
      <Demo :component="Dialog1Demo" />
      <Demo :component="Dialog2Demo" :description="dialog2Description" />
      <Demo :component="Dialog3Demo" />
    </div>
  </div>
</template>
