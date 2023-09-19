<demo>基础用法</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="标签 1">内容 1</Tab>
    <Tab title="标签 2">内容 2</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'

const selected = ref('标签 1')
</script>