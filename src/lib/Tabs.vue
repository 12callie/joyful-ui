<script lang="ts" setup>
import { computed, useSlots, ref, watchPostEffect } from 'vue'
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

const currentTitle = ref<HTMLDivElement>(null)
const indicator = ref<HTMLDivElement>(null)
const container = ref<HTMLDivElement>(null)
watchPostEffect(() => {
  const { width } = currentTitle.value.getBoundingClientRect()
  indicator.value.style.width = width + 'px'
  const { left: left1 } = container.value.getBoundingClientRect()
  const { left: left2 } = currentTitle.value.getBoundingClientRect()
  const left = left2 - left1
  indicator.value.style.left = left + 'px'
})
</script>

<template>
  <div class="j-tabs">
    <div class="j-tabs-nav-wrapper">
      <div ref="container" class="j-tabs-nav">
        <div v-for="(t, index) in titles"
             :key="index"
             :ref="(el)=>{
               if(t === selected){
                 currentTitle = el
               }
             }"
             :class="{selected: t === selected}"
             class="j-tabs-nav-item"
             @click="selectTitle(t)">
          {{ t }}
        </div>

        <div ref="indicator" class="j-tabs-nav-indicator"></div>
      </div>
    </div>
    <div class="j-tabs-content">
      <component :is="current" :key="current.props.title" />
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
      transition: left 0.25s;
      background: $theme-color;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>