<script lang="ts" setup>
import { ref } from 'vue'

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
</script>


<template>

  <div class="demo">
    <div class="demo-title">
      <div>{{ component.__sourceCodeTitle }}</div>
      <div class="code-toggle" :data-attr="afterContent">
        <svg class="icon" @click="codeToggle">
          <use xlink:href="#icon-toggle"></use>
        </svg>
      </div>
    </div>
    <div class="demo-content">
      <p class="demo-description" v-html="description"></p>
      <Component :is="component" />
    </div>
    <div class="demo-code" v-if="code">
      <pre v-text="component.__sourceCode"></pre>
    </div>
  </div>


</template>

<style scoped lang="scss">
@import "../assets/styles/common.scss";


.demo {
  border: 1px solid $border-color;
  margin-bottom: 16px;

  .demo-title {
    display: flex;
    margin: 20px 24px 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .code-toggle {
      cursor: pointer;
      position: relative;

      &:hover:after {
        position: absolute;
        right: -28px;
        bottom: 30px;
        padding: 8px 12px;
        background-color: #333;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
        color: #fff;
        border-radius: 5px;
        content: attr(data-attr);
        z-index: 2;
        font-size: 12px;
        width: 72px;
        vertical-align: middle;
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
    border-top: 1px solid $border-color;
    padding: 20px 24px;
  }
}
</style>