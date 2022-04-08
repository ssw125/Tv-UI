<template>
<Teleport to="#app">
<Transition name="mask">
    <div class=" absolute h-full w-full bg-black opacity-60 flex justify-center" v-show="display??true">
        <Transition name="pannel">
        <div class=" h-60 w-1/3 mt-20 bg-white px-7 py-5 rounded-sm min-w-fit" v-show="display??true">
            <div class=" flex items-center justify-between md:truncate">
                <span class=" text-xl">{{title??"标题"}}</span>
                <span @click="close"> <svg viewBox="0 0 1024 1024" class="h-4 w-4 hover:text-blue-400"
                xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                </path></svg></span>
            </div>
            <div class=" mt-10 break-normal sm:truncate">
                <slot name="content">{{content??"内容"}}</slot>
            </div>
            <div class="mt-14 flex items-center justify-between flex-wrap">
                <button @click="$props.cancel?$props.cancel():close()" class="px-3 py-1 rounded-sm border-2 hover:bg-gray-400 ">cancel</button>
                <button @click="$props.config?$props.config():close()" class="px-3 py-1 rounded-sm bg-sky-600 text-white hover:bg-sky-300">config</button>
            </div>
        </div>
        </Transition>
    </div>
</Transition>
</Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
    display?:boolean,
    config?:(payload?: MouseEvent) => void,
    cancel?:(payload?: MouseEvent) => void,
    title?:string,
    content?:string,

}>()
const emit = defineEmits({"update:display":null})
const close = ()=>{
    console.log("aaa")
    emit("update:display",false)
}
const show = ref()
</script>

<style scoped>
.mask-enter-active,
.mask-leave-active{
    transition: opacity 0.5s ease;
}

.mask-enter-from,
.mask-leave-to{
    opacity: 0;
}
.pannel-enter-active{
    animation: pannel .5s;
}
.pannel-leave-active{
    animation: pannel .5s reverse;
}
@keyframes pannel{
    0%{
        transform: translateY(-20px);
    }
    100%{
        transform: translateY(0);
    }
}
</style>
