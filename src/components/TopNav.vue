<script setup lang="ts">
import { inject, Ref } from 'vue'

const menuLocation = inject<Ref<boolean>>('menuLocation')


</script>

<template>
  <div class="top-nav">
    <div class="nav-content">
      <router-link to="/" class="logo">
        <img src="../assets/img/logo.png" alt="logo" />
        <span v-if="menuLocation" class="logo-text">Joyful UI</span>
      </router-link>
      <svg v-if="!menuLocation" class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <div v-if="menuLocation" class="nav-menu">
        <ol>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/joyful/doc">文档</router-link>
          </li>
          <li>
            <router-link to="/joyful/components">组件</router-link>
          </li>
          <li><a href="http://github.com">GitHub</a></li>
        </ol>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/styles/common.scss";

.top-nav {
  border-bottom: 1px solid $border-color;
  background: #fff;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;

  .nav-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    position: relative;

    .logo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:focus {
        outline-style: none;
      }

      img {
        height: 64px;
      }

      .logo-text {
        font-size: 20px;
        margin-left: 4px;
        white-space: nowrap;
      }
    }

    svg {
      position: absolute;
      right: 16px;
      top: auto;
      cursor: pointer;
    }

    .nav-menu {
      font-size: 14px;

      ol {
        display: flex;
        flex-direction: row;

        li {
          padding: 20px;
          white-space: nowrap;

          > a {
            &:hover,
            &.router-link-active {
              color: $theme-color;
            }
          }
        }
      }
    }
  }

  @media (min-width: 500px) {
    .nav-content {
      justify-content: space-between;
    }
  }

  .j-menu-levitation {
    position: absolute;
    top: 64px;
    right: 8px;
    background: #fff;
    width: 80%;
    max-width: 270px;
    height: 80vh;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    z-index: 10;
    padding: 16px 0;
  }
}
</style>
