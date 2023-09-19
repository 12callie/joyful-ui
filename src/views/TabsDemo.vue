<script lang="ts" setup>
import Demo from '../components/Demo.vue'
import Tabs1Demo from '../components/Tabs1.demo.vue'

</script>

<template>
  <div class="button-demos">
    <h1 class="component-demos-h1">标签页 Tabs</h1>
    <p>在同一块区域切换内容。</p>
    <h2 class="component-demos-h2">演示</h2>
    <div class="component-demos">
      <Demo :component="Tabs1Demo" />
    </div>
  </div>
</template>