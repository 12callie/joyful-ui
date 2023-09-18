<demo>时间</demo>
<template>
  <Button @click="createMessage">持续 5 秒</Button>
</template>

<script lang="ts" setup>
import { useMessage } from '../lib/useMessage'
import Button from '../lib/Button.vue'

const message = useMessage()

const createMessage = () => {
  message.info(
      '提示内容',
      { duration: 5000 })
}

</script>