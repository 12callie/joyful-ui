<demo>返回上级</demo>
<template>
  <NavBar left-arrow
          left-text="返回"
          title="标题"
          @click-left="onClickLeft" />
</template>

<script lang="ts" setup>
import NavBar from '../lib/NavBar.vue'

const onClickLeft = () => history.back()
</script>