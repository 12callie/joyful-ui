<script lang="ts" setup>
import Prism from 'prismjs'

import { ref, computed } from 'vue'

const props = defineProps({
  component: {
    type: Object,
  },
  description: {
    type: String,
  },
})

const code = ref(false)
const afterContent = ref('显示代码')
const codeToggle = () => {
  code.value = !code.value
  if (code.value) {
    afterContent.value = '隐藏代码'
  } else {
    afterContent.value = '显示代码'
  }
}

const html = computed(() => {
  return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
})

</script>


<template>

  <div class="demo">
    <div class="demo-title">
      <div>{{ component.__sourceCodeTitle }}</div>
      <div :data-attr="afterContent" class="code-toggle">
        <svg class="icon" @click="codeToggle">
          <use xlink:href="#icon-toggle"></use>
        </svg>
      </div>
    </div>
    <div class="demo-content">
      <p class="demo-description" v-html="description"></p>
      <Component :is="component" />
    </div>
    <div v-if="code" class="demo-code">
      <pre class="language-css" v-html="html"></pre>
    </div>
  </div>


</template>


<style>
@import "prismjs/themes/prism.css";
</style>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";


.demo {
  margin-bottom: 16px;
  border: 1px solid $border-color;

  .demo-title {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 24px 12px;

    .code-toggle {
      position: relative;
      cursor: pointer;

      &:hover:after {
        font-size: 12px;
        position: absolute;
        z-index: 2;
        right: -28px;
        bottom: 30px;
        width: 72px;
        padding: 8px 12px;
        content: attr(data-attr);
        vertical-align: middle;
        color: #fff;
        border-radius: 5px;
        background-color: #333;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
      }
    }
  }

  .demo-content {
    margin: 0 24px 12px;

    .demo-description {
      font-size: 14px;
    }
  }

  .demo-code {
    padding: 20px 24px;
    border-top: 1px solid $border-color;
  }
}
</style>