<template>
<div>
    <div class=" relative flex items-center">
        <i class="absolute w-4 h-4 right-2 " v-if="v_input.length" @click="v_input=''">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path></svg>
        </i>
        <input v-model="v_input" @input="w_input"  class="border-2 outline-none pl-2 pr-6 rounded-md focus:border-blue-300" :class="[i_size]">
    </div>
    <Transition name="fade">
        <div class="absolute mt-4" v-if="v_input.length&&items.length && isSelected">
        <div class=" absolute h-4 w-4 bg-white border-2 rotate-45 left-10 -top-2 border-b-0 border-r-0">
        </div>
            <ul class=" h-auto shadow-lg border-2 rounded-md py-2" :class="[i_size]" @click="select" >
                <li class="hover:bg-slate-300 h-8 leading-8 px-2 text-neutral-500" v-for="item in items">{{item}}</li>
            </ul>
        </div>
    </Transition>
</div>
</template>

<script setup lang="ts">
import {sizeType} from '../type'
import {onMounted, ref} from 'vue'
const props = defineProps<{
    size?:sizeType,
    suggestion?:string[],
    querySearch?:()=>Promise<string[]> //异步函数，可以用来当作具有搜索功能的输入框
}>()

const w_input = ()=>{ // 监听输入
    isSelected.value=true 
    if(props.querySearch){
        props.querySearch().then(res=>{ //异步查询
            items.value = res
        })
    }else if(!props.querySearch && props.suggestion){
        items.value = props.suggestion.filter(i=>{
            return i[0].toLowerCase() === v_input.value.toLowerCase()
        })
    }
}
const v_input = ref('')
const items = ref<(string|number)[]>([])
const isSelected = ref(false)

const select = (e:MouseEvent)=>{ //监听选项是否被点击
    isSelected.value = false
   v_input.value = (e.target as HTMLElement).innerHTML
}
const i_size = ref('w-56 h-8')
onMounted(()=>{
    if(!props.querySearch && props.suggestion){
        items.value = props.suggestion
    }
    switch(props.size){
        case "big":
            i_size.value = 'w-60 h-10'
            return
        case 'min':
            i_size.value = 'w-52 h-6'
        default:
            return
    }
})
</script>
<style scoped>

.fade-leave-active {
    animation: active 0.5s reverse;
    transition: opacity 0.5s ease;
}
.fade-enter-active{
    animation: active 0.5s ;
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes active{
    0%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(0);
    }
}
</style>