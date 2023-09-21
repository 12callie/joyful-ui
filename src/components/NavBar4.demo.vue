<demo>使用插槽</demo>
<template>
  <NavBar left-arrow title="标题">
    <template #rightIcon>
      <svg class="icon">
        <use xlink:href="#icon-search"></use>
      </svg>
    </template>
  </NavBar>
</template>

<script lang="ts" setup>
import NavBar from '../lib/NavBar.vue'
</script>