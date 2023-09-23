<demo>使用 useDialog</demo>
<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts" setup>
import { useDialog } from '../lib/useDialog'
import Button from '../lib/Button.vue'

const showDialog = () => {
  useDialog({
    title: '提示',
    content: '确定？',
    ok: () => {
      console.log('ok')
    },
    cancel: () => {
      console.log('cancel')
    },
  })
}
</script>