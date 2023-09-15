<demo>加载中</demo>
<template>
  <Switch loading></Switch>
  <Switch
      :loading="loading"
      :value="active"
      @update:value="handleUpdateValue"
  ></Switch>
</template>

<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

const active = ref(false)
const loading = ref(false)
const handleUpdateValue = (value: boolean) => {
  loading.value = true
  setTimeout(() => {
    active.value = value
    loading.value = false
  }, 2000)
}
</script>