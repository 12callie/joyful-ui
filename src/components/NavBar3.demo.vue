<demo>右侧按钮</demo>
<template>
  <NavBar left-arrow
          right-text="按钮"
          title="标题"
          @click-left="onClickLeft"
          @click-right="onClickRight" />
</template>

<script lang="ts" setup>
import NavBar from '../lib/NavBar.vue'

const onClickLeft = () => history.back()
const onClickRight = () => console.log('按钮')
</script>