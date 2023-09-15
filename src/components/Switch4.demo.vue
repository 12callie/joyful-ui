<demo>形状</demo>
<template>
  <Switch v-model:value="active" :square="true"></Switch>
</template>

<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

const active = ref(false)
</script>