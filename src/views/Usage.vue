<script lang="ts" setup>
</script>

<template>
  <article>
    <h1>在 SFC 中使用</h1>
    <p>
      请先<a href="/joyful/doc/install">安装</a
    >本组件库，然后你就可以直接导入组件并使用它。
    </p>
    <p>
      值得注意的是，本库全程采用 setup script 语法编写，如果你可以使用 setup
      script，你可以用下面的方式使用组件。
    </p>
    <pre>
&lt;template&gt;
  &lt;div&gt;
      &lt;Button&gt;按钮&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
  import {Button} from "joyful-ui"
&lt;/script&gt;
 </pre>
  </article>
</template>

<style lang="scss" scoped>
@import "../assets/styles/docStyle.scss";
</style>
