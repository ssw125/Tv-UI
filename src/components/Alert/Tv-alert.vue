<template>
<Teleport to="body">
    <Transition name="fade">
    <div class=" absolute top-0 right-0 flex h-20 w-1/5 space-x-3 px-2 rounded items-center" :class="typecolor[0]"  v-show="modelValue">
    <i class=" h-5 w-5" :class="typecolor[1]">
    <slot name="icon">
        <svg viewBox="0 0 1024 1024" v-if="type=='success'" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path></svg>
        <svg viewBox="0 0 1024 1024" v-if="type=='warning'" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></svg>
        <svg v-if="type=='success'" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></svg>
    </slot>
    </i>
    <slot><div class="flex-1 truncate " :class="typecolor[1]">{{content}}aaa</div></slot>
    <i class="absolute w-4 h-4 top-1 right-1 text-gray-400" @click="close" v-if="closable">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></svg>
    </i>
    </div>
    </Transition>
</Teleport>

</template>

<script setup lang="ts">
import {ref, onMounted } from 'vue';
const props = defineProps<{
    modelValue?:boolean,
    closable?:boolean,
    content?:string,
    type?:'success' | 'warning' | 'error',
    closeEvent:()=>{}
}>()
const emits = defineEmits(["update:modelValue"])
const close = props.closeEvent ??(()=>{
    emits("update:modelValue",false)
})
const typecolor = ref<string[]>(['bg-green-200','text-green-500'])
onMounted(()=>{
    switch(props.type){
        case "error":
            typecolor.value = ['bg-red-200','text-red-500']
            break
        case 'warning':
            typecolor.value = ['bg-orange-200','text-orange-500']
            break
    }
})
</script>
<style scoped>
.fade-enter-active{
    animation: fade .5s ease;
}
.fade-leave-active{
    animation: fade 0.5s reverse;
}   
@keyframes fade{
    0%{
        transform: translateY(-50px);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}
</style>