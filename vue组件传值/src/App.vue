<template>
  <!-- 父组件传给子组件的值 -->
  <div id="app">
    <!-- 注册事件 -->
    <num @numchange="handlechange" :count="n"></num>
    {{n}}

    <hr>
    <com-a></com-a>
    <hr>
    <com-b></com-b>
  </div>
</template>

<script>
import comA from '@/components/componentA'
import comB from '@/components/componentB'
// 局部注册 引入子组件
import Num from '@/components/Num';
export default {
  data(){
    return{
      n:5
    }
  },
  components:{
    Num,
    comA,
    comB
  },
  methods:{
    // 接收子组件的传值
    handlechange(num1){
      // 把子组件的值赋值给父组件中的对象
      this.n = num1;
    }
  },
  name:'App'
}
</script>

<style>
</style>
