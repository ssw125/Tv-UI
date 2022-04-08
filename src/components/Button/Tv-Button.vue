<script setup lang="ts">
import {onMounted,ref,computed} from 'vue'
import {btn_Type,btn_shape} from './config'
import {propType,shapeType,sizeType} from './type'
const props = defineProps<{
    btn_type?:propType,
    shape?:shapeType,
    size?:sizeType, //用于当形状为圆形时
    disable?:boolean,
    icon?:boolean,
    btn_click?:(payload: MouseEvent) => void
}>()
const btn_type_config = ref(btn_Type.btn_default)

//按钮形状
const shape_btn = ref(btn_shape.plain)

const size_btn = ref('px-6 py-1')

onMounted(()=>{
    switch(props.btn_type){
        case "primary":
            btn_type_config.value = btn_Type.btn_primary
            break
        case "danger":
            btn_type_config.value = btn_Type.btn_danger
            break
        case "success":
            btn_type_config.value = btn_Type.btn_success
            break
        case "warn":
            btn_type_config.value = btn_Type.btn_warn
            break
        default:
            btn_type_config.value = btn_Type.btn_default
        
    }
    switch(props.shape){
        case "plain":
            shape_btn.value = btn_shape.plain
            break
        case "circle":
            shape_btn.value = btn_shape.circle
            break
        case "round":
            shape_btn.value = btn_shape.round
            break
        default:
            shape_btn.value = btn_shape.plain
    }
    switch(props.size){
        case 'middle':
            size_btn.value = 'px-6 py-1 h-10'
            if(props.shape == `circle`){
                size_btn.value = `h-12 w-12 text-ms`
            }
            break
        case 'big':
            size_btn.value = `px-7 py-2 h-12`
            if(props.shape == `circle`){
                size_btn.value = `h-14 w-14 `
            }
            break
        case 'min':
            size_btn.value = `px-4 py-1 text-sm h-8`
            if(props.shape == `circle`){
                size_btn.value = `h-10 w-10 text-sm`
            }
            break
        default:
            size_btn.value = `px-6 py-1`
    }
})
</script>
<template>
    <button @click="btn_click"
     :class="[btn_type_config,shape_btn,size_btn]" class="border-2 flex-row flex items-center focus:ring-2 focus:ring-offset-1 font-medium text-base outline-none">
        <i v-if="icon" style="height:1.2em;width:1.2em;margin-right:3px">
            <slot name="icon">
               
            </slot>
         </i>
        <slot><span></span></slot>
    </button>
</template>


<style scoped>

</style>
