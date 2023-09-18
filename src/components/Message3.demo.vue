<demo>多行</demo>
<template>
  <Button @click="createMessage">多行</Button>
</template>

<script lang="ts" setup>
import { useMessage } from '../lib/useMessage'
import Button from '../lib/Button.vue'

const message = useMessage()

const createMessage = () => {
  message.info(
      '提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容')
}

</script>