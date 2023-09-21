<script lang="ts" setup>
import Demo from '../components/Demo.vue'
import NavBar1Demo from '../components/NavBar1.demo.vue'
import NavBar2Demo from '../components/NavBar2.demo.vue'
import NavBar3Demo from '../components/NavBar3.demo.vue'
import NavBar4Demo from '../components/NavBar4.demo.vue'
</script>

<template>
  <div class="button-demos">
    <h1 class="component-demos-h1">导航栏 NavBar</h1>
    <p>为页面提供导航功能，常用于页面顶部。</p>
    <h2 class="component-demos-h2">演示</h2>
    <div class="component-demos">
      <Demo :component="NavBar1Demo" />
      <Demo :component="NavBar2Demo" />
      <Demo :component="NavBar3Demo" />
      <Demo :component="NavBar4Demo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-demos {
  ::v-deep(.demo-content) {
    padding: 8px 16px;
    background-color: rgb(247, 248, 250);
  }
}

</style>