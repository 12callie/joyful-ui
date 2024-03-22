<script lang="ts" setup>
import { computed } from 'vue'
import Prism from 'prismjs'
import ExampleDemo from '../components/ExampleDemo.vue'

const html = computed(() => {
  return Prism.highlight(ExampleDemo.__sourceCode, Prism.languages.html, 'html')
})
</script>

<template>
  <article class="markdown-body">
    <h1>在 SFC 中使用</h1>
    <p>
      请先<router-link to="/joyful/doc/install">安装</router-link>本组件库，然后你就可以直接导入组件并使用它。
    </p>
    <p>
      值得注意的是，本库全程采用 setup script 语法编写，如果你可以使用 setup
      script，你可以用下面的方式使用组件。
    </p>
    <pre class="language-css" v-html="html"></pre>
  </article>
</template>

<style>
@import "prismjs/themes/prism.css";
</style>

<style lang="scss" scoped>
@import "../assets/styles/docStyle.scss";
</style>