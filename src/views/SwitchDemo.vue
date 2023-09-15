<script lang="ts" setup>
import { ref } from 'vue'
import Demo from '../components/Demo.vue'
import Switch1Demo from '../components/Switch1.demo.vue'
import Switch2Demo from '../components/Switch2.demo.vue'
import Switch3Demo from '../components/Switch3.demo.vue'
import Switch4Demo from '../components/Switch4.demo.vue'

const switch4Description = ref('开关可以设为方形。')
</script>

<template>
  <div class="button-demos">
    <h1 class="j-component-demos-h1">开关 Switch</h1>
    <h2 class="j-component-demos-h2">演示</h2>
    <div class="j-component-demos">
      <Demo :component="Switch1Demo"></Demo>
      <Demo :component="Switch2Demo"></Demo>
      <Demo :component="Switch3Demo"></Demo>
      <Demo :component="Switch4Demo" :description="switch4Description"></Demo>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
