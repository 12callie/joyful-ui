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

<template>
  <h1>开关 Switch</h1>
  <h2>演示</h2>
  <div>
    <div>基础用法</div>
    <Switch v-model:value="active"></Switch>
  </div>
  <div>
    <div>禁用</div>
    <Switch disabled></Switch>
  </div>
  <div>
    <div>加载中</div>
    <Switch loading></Switch>
    <Switch
        :value="active"
        :loading="loading"
        @update:value="handleUpdateValue"
    ></Switch>
  </div>
  <div>
    <div>形状</div>
    <Switch :square="true" v-model:value="active"></Switch>
  </div>
</template>


<style lang="scss" scoped></style>
