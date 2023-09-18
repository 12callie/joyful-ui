<demo>基础用法</demo>
<template>
  <Button @click="info">点击提示</Button>
  <Button @click="error">错误提示</Button>
  <Button @click="warning">警告提示</Button>
  <Button @click="success">成功提示</Button>
</template>

<script lang="ts" setup>
import { useMessage } from '../lib/useMessage'
import Button from '../lib/Button.vue'

const message = useMessage()

const info = () => {
  message.info('提示内容')
}
const error = () => {
  message.error('错误提示')
}
const warning = () => {
  message.warning('警告提示')
}
const success = () => {
  message.success('成功提示')
}
</script>