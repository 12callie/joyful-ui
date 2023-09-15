<demo>加载中</demo>
<template>
  <Button class="j-loadingButton" loading>加载中</Button>
  <Button :loading="loadingRef" @click="handleClick">点我</Button>
</template>

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