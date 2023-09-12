<script lang="ts" setup>
import TopNav from '../components/TopNav.vue'

</script>


<template>
  <div class="layout">
    <top-nav class="nav" />
    <div class="content">
      <aside class="menu-aside">
        <ol class="menu-content">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li class="menu-title">文档</li>
          <li>
            <router-link to="/joyful/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/joyful/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/joyful/doc/usage">在 SFC 中使用</router-link>
          </li>
          <li class="menu-title">组件</li>
          <li>
            <router-link to="/joyful/components/button">按钮 Button</router-link>
          </li>
          <li>
            <router-link to="/joyful/components/switch">开关 Switch</router-link>
          </li>
        </ol>
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

      ol {
        height: 100%;
        overflow: scroll;

        &::-webkit-scrollbar {
          display: none;
        }

        > li {
          white-space: nowrap;
          margin-bottom: 4px;

          &.menu-title {
            font-size: 20px;
            font-weight: bold;
            padding: 4px 18px;
          }

          > a {
            display: block;
            padding: 8px 28px;

            &:hover {
              background: #f3f3f5;
            }

            &.router-link-active {
              color: $theme-color;
              background: #e7f5ee;
            }
          }
        }
      }
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