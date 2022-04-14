<template>
<div class="relative flex items-center overflow-hidden">
    <i class="pl-1 absolute h-5 w-5  text-gray-400">
        <slot name="left">
        </slot>
    </i>
    <input @input="check" :type="type??'text'" :maxlength="length"
    :value="props.modelValue" class="pr-5 outline-none text-slate-700 rounded-md items-center border-2 caret-blue-300 focus:border-blue-300"  
    :class="[i_size,isdisable,hasicon]" :placeholder="placeholder"
    :disabled="disable"
    />
    <i class="absolute h-4 w-4 right-4 text-gray-400" v-show="clearable&&icon" @click="clear">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path></svg>
    </i>
</div>
</template>

<script setup lang="ts">
import {onMounted,ref,useSlots,computed} from 'vue';
import {sizeType} from '../type'
const props  = defineProps<{
        size?:sizeType,
        clearable?:boolean
        placeholder?:string,
        modelValue:number | string,
        type?:"password" | "number" | "text",
        disable?:boolean,
        length?:number
    }>()
const emit = defineEmits({
    "update:modelValue":null
})

const hasicon = ref("")
const i_size = ref("")
const icon = ref(false)
const check = (e:Event)=>{ //检查input框中的字符长度
    (e.target as HTMLInputElement).value.length>0?icon.value = true : icon.value =false
    emit("update:modelValue",(e.target as HTMLInputElement).value)
}
const isdisable = computed(()=>{
    return props.disable?"cursor-not-allowed":""
})
const clear = ()=>{
    emit("update:modelValue","")
    icon.value = false
}
onMounted(()=>{
    switch(props.size){
            case "big":
                i_size.value ="h-10"
                break
            case "middle":
                i_size.value = "h-8"
                break
            case "min":
                i_size.value = "h-6"
                break
            default:
                i_size.value = "h-8"
    }
    if(useSlots()['left']){ //判断是否传入
       hasicon.value = "pl-5"
    }else{
        hasicon.value = "pl-2"
    }
})
</script>

<style scoped>
input[type=number] {
    -moz-appearance:textfield;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>