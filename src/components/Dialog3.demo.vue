<demo>成功 / 错误</demo>
<template>
  <Button @click="handleSuccessClick">成功</Button>
  <Button @click="handleErrorClick">错误</Button>
</template>

<script lang="ts" setup>
import { useDialog } from '../lib/useDialog'
import Button from '../lib/Button.vue'

const handleSuccessClick = () => {
  useDialog({
    theme: 'success',
    title: '成功',
    content: '厉害',
    positiveText: '哇',
    ok: () => {
      console.log('哇')
    },
  })
}
const handleErrorClick = () => {
  useDialog({
    theme: 'error',
    title: '错误',
    content: '错了',
    positiveText: '啊',
    ok: () => {
      console.log('啊')
    },
  })
}
</script>