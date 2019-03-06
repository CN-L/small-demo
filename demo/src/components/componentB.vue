<template>
    <div>
        coponmentB
        <br>
        {{num}}
    </div>
</template>
<script>
import vueObject from '@/components/comment'
export default {
    data(){
        return {
            num:0
        }
    },
    created(){
      // 注册事件
        vueObject.$on('change',(data)=>{
           this.num = data
        })
    }
}
</script>
<style>

</style>
