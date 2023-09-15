<script lang="ts" setup>
import Button from '../lib/Button.vue'
import { ref } from 'vue'

const loadingRef = ref(false)

function handleClick () {
  loadingRef.value = true
  setTimeout(() => {
    loadingRef.value = false
  }, 2000)
}

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
  <div class="button-demos">
    <h1>按钮 Button</h1>
    <p>按钮用来触发一些操作。</p>
    <h2>演示</h2>
    <div class="demos">
      <div class="demo">
        <div class="demo-title">
          <div>基础用法</div>
          <div class="code-toggle" :data-attr="afterContent">
            <svg class="icon" @click="codeToggle">
              <use xlink:href="#icon-toggle"></use>
            </svg>
          </div>
        </div>
        <div class="demo-content">
          <p class="demo-description">
            按钮的 <code>type</code> 分别为
            <code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>、<code>warning</code> 和
            <code>error</code>。
          </p>
          <div>
            <Button>Default</Button>
            <Button theme="primary">Primary</Button>
            <Button theme="info">Info</Button>
            <Button theme="success">Success</Button>
            <Button theme="warning">Warning</Button>
            <Button theme="error">Error</Button>
          </div>
        </div>
        <div class="demo-code" v-if="code">
          <pre>import Button from "../lib/Button.vue";</pre>
        </div>
      </div>

      <div class="demo">
        <div class="demo-title">
          <div>虚线按钮</div>
          <div class="code-toggle" :data-attr="afterContent">
            <svg class="icon" @click="codeToggle">
              <use xlink:href="#icon-toggle"></use>
            </svg>
          </div>
        </div>
        <div class="demo-content">
          <p class="demo-description">
            使用 <code>dashed</code> 来使用虚线按钮。
          </p>
          <div>
            <Button dashed>Default</Button>
            <Button dashed theme="primary">Primary</Button>
            <Button dashed theme="info">Info</Button>
            <Button dashed theme="success">Success</Button>
            <Button dashed theme="warning">Warning</Button>
            <Button dashed theme="error">Error</Button>
          </div>
        </div>
        <div class="demo-code" v-if="code">
          <pre>import Button from "../lib/Button.vue";</pre>
        </div>
      </div>

      <div class="demo">
        <div class="demo-title">
          <div>尺寸</div>
          <div class="code-toggle" :data-attr="afterContent">
            <svg class="icon" @click="codeToggle">
              <use xlink:href="#icon-toggle"></use>
            </svg>
          </div>
        </div>
        <div class="demo-content">
          <p class="demo-description">
            有 <code>tiny</code>、<code>small</code>、<code>medium</code> 和
            <code>large</code> 尺寸。
          </p>
          <div>
            <Button size="tiny">tiny</Button>
            <Button size="small">small</Button>
            <Button size="medium">medium</Button>
            <Button size="large">large</Button>
          </div>
        </div>
        <div class="demo-code" v-if="code">
          <pre>import Button from "../lib/Button.vue";</pre>
        </div>
      </div>

      <div class="demo">
        <div class="demo-title">
          <div>文本按钮</div>
          <div class="code-toggle" :data-attr="afterContent">
            <svg class="icon" @click="codeToggle">
              <use xlink:href="#icon-toggle"></use>
            </svg>
          </div>
        </div>
        <div class="demo-content">
          <p class="demo-description">长得就像文本。</p>
          <div>
            <Button text>这是一个文本按钮</Button>
          </div>
        </div>
        <div class="demo-code" v-if="code">
          <pre>import Button from "../lib/Button.vue";</pre>
        </div>
      </div>

      <div class="demo">
        <div class="demo-title">
          <div>禁用</div>
          <div class="code-toggle" :data-attr="afterContent">
            <svg class="icon" @click="codeToggle">
              <use xlink:href="#icon-toggle"></use>
            </svg>
          </div>
        </div>
        <div class="demo-content">
          <p class="demo-description">按钮可以被禁用。</p>
          <div>
            <Button disabled>不许点</Button>
          </div>
        </div>
        <div class="demo-code" v-if="code">
          <pre>import Button from "../lib/Button.vue";</pre>
        </div>
      </div>

      <div class="demo">
        <div class="demo-title">
          <div>加载中</div>
          <div class="code-toggle" :data-attr="afterContent">
            <svg class="icon" @click="codeToggle">
              <use xlink:href="#icon-toggle"></use>
            </svg>
          </div>
        </div>
        <div class="demo-content">
          <p class="demo-description">按钮有加载状态。</p>
          <div>
            <Button class="j-loadingButton" loading>加载中</Button>
            <Button :loading="loadingRef" @click="handleClick">点我</Button>
          </div>
        </div>
        <div class="demo-code" v-if="code">
          <pre>import Button from "../lib/Button.vue";</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/common.scss";

.button-demos {
  > h1 {
    margin-bottom: 24px;
  }

  > h2 {
    margin: 24px 0;
  }
}

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

@media (min-width: 1000px) {
  .demos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }
  .demo {
    width: 49%;
  }
}
</style>