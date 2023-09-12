<script lang="ts" setup>
import TopNav from '../components/TopNav.vue'
import MenuContent from '../components/MenuContent.vue'

</script>


<template>
  <div class="layout">
    <top-nav class="nav" />
    <div class="content">
      <aside class="menu-aside">
        <menu-content />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/common.scss";

.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .nav {
    flex-shrink: 0;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;

    aside {
      width: 200px;
      height: 100%;
      border-right: 1px solid $border-color;
      flex-shrink: 0;
      position: fixed;
      top: 64px;
      transition: all 0.3s;
      padding: 8px;
    }

    main {
      flex-grow: 1;
      overflow: hidden;
      padding: 32px 24px 56px 56px;
      margin-top: 64px;
      margin-left: 200px;

    }
  }
}
</style>