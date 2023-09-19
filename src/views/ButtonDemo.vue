<script lang="ts" setup>
import { ref } from 'vue'
import Button1Demo from '../components/Button1.demo.vue'
import Button2Demo from '../components/Button2.demo.vue'
import Button3Demo from '../components/Button3.demo.vue'
import Button4Demo from '../components/Button4.demo.vue'
import Button5Demo from '../components/Button5.demo.vue'
import Button6Demo from '../components/Button6.demo.vue'
import Demo from '../components/Demo.vue'

const button1Description = ref(`按钮的 <code>type</code> 分别为
            <code>default</code
            >、<code>primary</code>、<code>info</code>、<code>success</code>、<code
              >warning</code
            >
            和 <code>error</code>。`)
const button2Description = ref('使用 <code>dashed</code> 来使用虚线按钮。')
const button3Description = ref('有 <code>tiny</code>、<code>small</code>、<code>medium</code> 和\n' +
    '            <code>large</code> 尺寸。')
const button4Description = ref('长得就像文本。')
const button5Description = ref('按钮可以被禁用。')
const button6Description = ref('按钮有加载状态。')
</script>


<template>
  <div class="button-demos">
    <h1 class="component-demos-h1">按钮 Button</h1>
    <p>按钮用来触发一些操作。</p>
    <h2 class="component-demos-h2">演示</h2>
    <div class="component-demos">
      <Demo :component="Button1Demo" :description="button1Description" />
      <Demo :component="Button2Demo" :description="button2Description" />
      <Demo :component="Button3Demo" :description="button3Description" />
      <Demo :component="Button4Demo" :description="button4Description" />
      <Demo :component="Button5Demo" :description="button5Description" />
      <Demo :component="Button6Demo" :description="button6Description" />
    </div>
  </div>
</template>
