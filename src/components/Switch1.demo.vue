<demo>基础用法</demo>
<template>
  <Switch v-model:value="active"></Switch>
</template>

<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

const active = ref(false)
</script>