<script lang="ts" setup>
import Demo from '../components/Demo.vue'
import NavBar1Demo from '../components/NavBar1.demo.vue'

</script>

<template>
  <div class="button-demos">
    <h1 class="component-demos-h1">导航栏 NavBar</h1>
    <p>为页面提供导航功能，常用于页面顶部。</p>
    <h2 class="component-demos-h2">演示</h2>
    <div class="component-demos">
      <Demo :component="NavBar1Demo" />

    </div>
  </div>
</template>