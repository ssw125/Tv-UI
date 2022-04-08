<script setup lang="ts">
  import { ref } from 'vue';
import TvInput from './components/Input/Tv-input.vue';
  const show = ref(false)
  const btn_click = ()=>{
      show.value = true
  }
</script>

<template>
<div style="margin-top:20px">
<!-- btn_type 按钮类型 -->
<!-- shape 按钮形状 -->
<!-- size的值 middel big min -->
<!-- disabled -->
<!-- icon 当需要传入图标时 设置为true -->
<!-- btn_click 按钮监听事件 -->
<!-- #icon插槽是按钮图标插槽 -->
<!-- #dafault 按钮文字 -->
  <Tv-Button btn_type="primary" size="middle" :icon="true" :btn_click ="btn_click">
    <template v-slot:icon>
      <edit/>
    </template>
  </Tv-Button>

<!-- display 控制对话框的显示 使用v-model对其进行动态的显示 -->
<!-- cancel 点击取消按钮执行的函数 -->
<!-- config 点击确认执行的函数 -->
<!-- title 对话框题目 -->
<!-- content 对话框内容 -->
<Tv-dialog v-model:display="show"></Tv-dialog>

<Tv-input></Tv-input>
</div>
</template>

<style>
#app{
  display: flex;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
}
</style>
