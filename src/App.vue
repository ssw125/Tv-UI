<script setup lang="ts">
  import { ref } from 'vue';
  import {throttle} from 'lodash-es'
  const show = ref(false)
  const btn_click = ()=>{
      show.value = true
  }
  const text = ref("ssw")
  const as = ()=>{
    return new Promise((reslove,reject)=>{
      setTimeout(()=>{
        console.log("设置定时器了")
        reslove([1,2,23])
      },2000)
    })
  }
</script>

<template>
<div>{{text}}</div>
<div style="margin-top:20px">

<!-- btn_type 按钮类型 -->
<!-- shape 按钮形状 -->
<!-- size的值 middel big min -->
<!-- disabled -->
<!-- icon 当需要传入图标时 设置为true -->
<!-- btn_click 按钮监听事件 -->
<!-- #icon插槽是按钮图标插槽 -->
<!-- #dafault 按钮文字 -->
  <Tv-button btn_type="primary" size="middle" :icon="true" :btn_click ="btn_click">
    <template v-slot:icon>
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path><path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path></svg>
    </template>
  </Tv-button>

<!-- 使用v-model对其进行动态的显示 -->
<!-- cancel 点击取消按钮执行的函数 -->
<!-- config 点击确认执行的函数 -->
<!-- title 对话框题目 -->
<!-- content 对话框内容 -->
<Tv-dialog v-model="show"></Tv-dialog>

<!-- size 尺寸  big min middle-->
<!-- placeholder  -->
<!-- clearable  -->
<!-- v-model 双向绑定 -->
<!--disable  -->
<!-- length 最大输入长度 -->

<!-- #left插槽 input框的左侧icon图标 -->
<Tv-input placeholder="hahahah"  size="min" v-model="text">
  <!-- <template #left>
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path></svg>
  </template> -->
</Tv-input>

<!-- size 尺寸大小-->
<!-- suggestion 手动设置下拉框存在哪些值-->
<!-- querySearch 传入一个返回Promise的函数，类似于搜索框的功能 优先级大于suggestion (建议使用节流函数对函数进行处理，再传入)-->

<!-- 匹配首字母 不区分大小写 -->
<Tv-autoComplete :suggestion="['vue','React','vuex']" size="middle" :querySearch="throttle(as,500)"></Tv-autoComplete>
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
