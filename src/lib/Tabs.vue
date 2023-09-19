<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import Tab from './Tab.vue'

const slots = useSlots()
const defaults = slots.default()
defaults.forEach(item => {
  if (item.type !== Tab) {
    throw new Error('Tabs 组件的子标签必须是 Tab')
  }
})
const titles = defaults.map(item => item.props.title)

const props = defineProps({
  selected: {
    type: String,
  },
})
const emit = defineEmits(['update:selected'])

const selectTitle = (newTitle: string) => {
  emit('update:selected', newTitle)
}
const current = computed(() => {
  return defaults.find(i => i.props.title === props.selected)
})
</script>

<template>
  <div class="j-tabs">
    <div class="j-tabs-nav-wrapper">
      <div class="j-tabs-nav">
        <div v-for="(t, index) in titles"
             :key="index"
             :class="{selected: t === selected}"
             class="j-tabs-nav-item"
             @click="selectTitle(t)">{{ t }}
        </div>

        <div class="j-tabs-nav-indicator"></div>
      </div>
    </div>
    <div class="j-tabs-content">
      <component :is="current" />

    </div>
  </div>
</template>

<style lang="scss">
$border-color: rgb(239, 239, 245);
$theme-color: #18a058;
.j-tabs {
  &-nav {
    position: relative;
    display: flex;
    flex-direction: row;

    &-wrapper {
      overflow-x: scroll;
      border-bottom: 1px solid $border-color;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &-item {
      margin: 0 16px;
      padding: 8px 0;
      cursor: pointer;
      white-space: nowrap;

      &:nth-child(1) {
        margin-left: 0;
      }

      &:hover,
      &.selected {
        color: $theme-color;
      }
    }

    &-indicator {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 34px;
      height: 3px;
      transition: left 0.3s;
      background: $theme-color;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>