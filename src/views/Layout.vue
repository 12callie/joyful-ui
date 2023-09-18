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
      <aside v-if="menuLocation" ref="menuAside" class="menu-aside">
        <menu-content />
        <div ref="svgAsideToggle" class="aside-toggle-button" @click="toggle">
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
  display: flex;
  flex-direction: column;
  height: 100vh;

  .nav {
    flex-shrink: 0;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    aside {
      position: fixed;
      top: 64px;
      flex-shrink: 0;
      width: 200px;
      height: 100%;
      padding: 8px;
      transition: all 0.3s;
      border-right: 1px solid $border-color;

      .aside-toggle-button {
        position: absolute;
        top: 260px;
        left: calc(100% - 12px);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        transition: all 0.3s;
        transform-origin: center;
        border: 1px solid $border-color;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
    }

    main {
      overflow: hidden;
      flex-grow: 1;
      margin-top: 64px;
      margin-left: 200px;
      padding: 32px 24px 56px 56px;
      transition: all 0.3s;
      @media (max-width: 500px) {
        margin-left: 0;
        padding-left: 24px;
      }
    }
  }
}
</style>
