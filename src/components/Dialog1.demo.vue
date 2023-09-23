<demo>基础用法</demo>
<template>
  <Button @click="openDialog">打开对话框</Button>
  <Dialog
      v-model:dialogVisible="dialogVisible"
      :cancel="f2"
      :closeOnClickOverlay="false"
      :ok="f1"
      content="你确定"
      negative-text="取消"
      positive-text="好的"
      title="标题"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'

const dialogVisible = ref(false)
const openDialog = () => {
  dialogVisible.value = true
}
const f1 = () => {
  console.log('ok')
  return false
}
const f2 = () => {
  console.log('cancel')
}
</script>