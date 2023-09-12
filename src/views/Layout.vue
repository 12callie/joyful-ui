<script lang="ts" setup>
import { ref, watchPostEffect, inject, Ref } from 'vue'
import TopNav from '../components/TopNav.vue'
import MenuContent from '../components/MenuContent.vue'

const menuLocation = inject<Ref<boolean>>('menuLocation')
const asideToggle = ref(true)
const toggle = () => {
  asideToggle.value = !asideToggle.value
}
const menuAside = ref<HTMLDivElement>(null)
const mainContent = ref<HTMLDivElement>(null)
const svgAsideToggle = ref<HTMLDivElement>(null)

watchPostEffect(() => {
  if (menuLocation.value) {
    if (asideToggle.value === true) {
      menuAside.value.style.left = '0'
      mainContent.value.style.marginLeft = '200px'
      svgAsideToggle.value.style.left = 'calc(100% - 12px)'
      svgAsideToggle.value.style.transform = 'rotate(0deg)'
    } else {
      menuAside.value.style.left = '-200px'
      mainContent.value.style.marginLeft = '0'
      svgAsideToggle.value.style.left = 'calc(100% + 12px)'
      svgAsideToggle.value.style.transform = 'rotate(180deg)'
    }
  } else {
    mainContent.value.style.marginLeft = '0'
  }
})
</script>


<template>
  <div class="layout">
    <top-nav class="nav" />
    <div class="content">
      <aside class="menu-aside" ref="menuAside" v-if="menuLocation">
        <menu-content />
        <div class="aside-toggle-button" @click="toggle" ref="svgAsideToggle">
          <svg class="icon">
            <use xlink:href="#icon-left"></use>
          </svg>
        </div>
      </aside>
      <main ref="mainContent">
        <router-view />
      </main>
    </div>
  </div>
</template>


<style lang="scss" scoped>
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

      .aside-toggle-button {
        border: 1px solid $border-color;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 260px;
        left: calc(100% - 12px);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        transform-origin: center;
        transition: all 0.3s;
      }
    }

    main {
      flex-grow: 1;
      overflow: hidden;
      padding: 32px 24px 56px 56px;
      margin-top: 64px;
      margin-left: 200px;
      transition: all 0.3s;
      @media (max-width: 500px) {
        margin-left: 0;
        padding-left: 24px;
      }
    }
  }
}
</style>
