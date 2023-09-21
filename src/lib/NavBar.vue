<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  leftArrow: {
    type: Boolean,
    default: false,
  },
  leftText: {
    type: String,
  },
  rightText: {
    type: String,
  },
  onClickLeft: {
    type: Function,
  },
  onClickRight: {
    type: Function,
  },
})
</script>

<template>
  <div class="j-nav-bar">
    <div class="j-nav-bar-left" @click="onClickLeft">
      <svg v-if="leftArrow" class="icon">
        <use xlink:href="#icon-left"></use>
      </svg>
      <span>{{ leftText }}</span>
    </div>
    <span class="j-nav-bar-title">{{ title }}</span>
    <div class="j-nav-bar-right" @click="onClickRight">
      {{ rightText }}
      <slot name="rightIcon"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.j-nav-bar {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  background-color: #fff;


  .j-nav-bar-left {
    font-size: 14px;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 16px;

    svg {
      width: 18px;
      height: 18px;
      margin-right: 4px;
    }
  }

  .j-nav-bar-title {
    max-width: 60%;
  }

  .j-nav-bar-right {
    font-size: 14px;
    padding: 0 16px;


  }
}
</style>