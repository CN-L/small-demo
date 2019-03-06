<template>
    <div>
        coponmentA
        <br>
        <input @keyup="handle" v-model="num" type="text">
    </div>
</template>
<script>
import vueObject from '@/components/comment'
export default {
    data(){
        return{
          num:0  
        }
        
    },
    methods:{
        handle(){
            // 触发事件
            vueObject.$emit('change',this.num)
        }
    }
}
</script>
<style>

</style>
