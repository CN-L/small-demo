<template>
    <div>
        <input class="btn" @click="handleAdd" type="button" value="+">
        <input class="text" type="text" v-model="num">
        <input class="btn" @click="handleMain" type="button" value="-">
    </div>
</template>
<script>
export default {
    // 父子传值：
    // 父组件需要引入子组件
    // 子组件props接收父组件传值
    props:['count'],
    data(){
        return {
            num:1
        }
    },
    created(){
         // 不要修改传过来的值
         // 操作props中的变量应该把props中的变量赋值给data中成员
        this.num = this.count;
    },
    methods:{
        handleAdd(){
            this.num ++
            //  触发事件，事件名称自定义 传值
            this.$emit('numchange',this.num)
        },
        handleMain(){
            if(this.num<1){
                return;
            }
            this.num --;
            this.$emit('numchange',this.num)
        }
    }
}
</script>
<style>
.btn{
    width: 50px;
}
.text{
    width: 80px;
}
</style>

