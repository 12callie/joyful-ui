<script lang="ts" setup>
import { ref, provide } from 'vue'

const width = document.documentElement.clientWidth
const menuLocation = ref(width > 500)
provide('menuLocation', menuLocation)
</script>


<template>
  <router-view />
</template>