<script lang="ts" setup>
</script>

<template>
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
    <li>
      <router-link to="/joyful/components/message">信息 Message</router-link>
    </li>
    <li>
      <router-link to="/joyful/components/tabs">标签页 Tabs</router-link>
    </li>
    <li>
      <router-link to="/joyful/components/navBar">导航栏 NavBar</router-link>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";

ol {
  overflow: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  > li {
    margin-bottom: 4px;
    white-space: nowrap;

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
</style>
