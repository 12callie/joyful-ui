<script lang="ts" setup>
import TopNav from '../components/TopNav.vue'

</script>


<template>
  <top-nav />
  <div class="content">
    <h1>Joyful UI</h1>
    <p>一个 Vue 3 组件库</p>
    <br />
    <p>提供了一些常用的组件，使用 TypeScript</p>
    <br />
    <p>本组件库只是用于学习 Vue3，为避免不必要的麻烦，请不要在生产环境中使用</p>
    <div class="actions">
      <button><a href="http://github.com">GitHub</a></button>
      <router-link to="/joyful/doc/install">
        <button>开始使用</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/common.scss";

.content {
  padding: 64px 24px 0;

  h1 {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 18px;
    color: $title-color;
  }

  p {
    padding: 4px 0;
  }

  .actions {
    margin-top: 16px;

    a:hover,
    a:focus {
      text-decoration: none;
      outline: none;
    }
  }
}
</style>