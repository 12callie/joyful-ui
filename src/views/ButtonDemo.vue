<script lang="ts" setup>
import { ref } from 'vue'
import Button1Demo from '../components/Button1.demo.vue'
import Button2Demo from '../components/Button2.demo.vue'
import Button3Demo from '../components/Button3.demo.vue'
import Button4Demo from '../components/Button4.demo.vue'
import Button5Demo from '../components/Button5.demo.vue'
import Button6Demo from '../components/Button6.demo.vue'

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
          <Button1Demo />
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
          <Button2Demo />
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
          <Button3Demo />
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
          <Button4Demo />
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
          <Button5Demo />
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
          <Button6Demo />
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