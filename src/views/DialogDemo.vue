<script lang="ts" setup>
import Demo from '../components/Demo.vue'
import Dialog1Demo from '../components/Dialog1.demo.vue'

</script>

<template>
  <div class="button-demos">
    <h1 class="component-demos-h1">对话框 Dialog</h1>
    <p></p>
    <h2 class="component-demos-h2">演示</h2>
    <div class="component-demos">
      <Demo :component="Dialog1Demo" />
    </div>
  </div>
</template>
