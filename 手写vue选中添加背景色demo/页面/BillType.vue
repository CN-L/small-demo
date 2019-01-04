<template>
    <div class="container">
      <table>
       <tr class="t-header">
         <th class="t-item">采购结案</th>
         <th>采购合同主数量</th>
         <th>采购合同月份</th>
         <th>项目性质</th>
         <th>部门</th>
         <th>入库主数量</th>
         <th>制单时间</th>
         <th>物料基本分类</th>
         <th>项目名称</th>
       </tr>
       <tr 
       v-for ="(item,index) in list" :key="index" @mouseenter="activeList(index)"
       :class="{ active:index == isActive}"
        @mouseleave="mouseLeave"
       >
         <td>{{item.cghtja}}</td>
         <td>{{item.ct_pu_bnnum}}</td>
         <td>{{item.def15name}}</td>
         <td>{{item.def1name}}</td>
         <td>{{item.deptname}}</td>
         <td>{{item.ic_purchasein_bnnum}}</td>
         <td>{{item.maketime}}</td>
         <td>{{item.marbasclassname}}</td>
         <td>{{item.projectid}}</td>
       </tr>
    </table>
    </div>
</template>
<script> 
import axios from 'axios'
export default {
  data(){
    return {
      // 默认为false
      isActive:'fasle',
       list:''
    }
  },
  methods:{
 
   async loadList(){
        let res = await axios.post('api/wechat/bg01')
        let { data: { data:list } } = res
        let {data:msg} = res;
        list = JSON.parse(list);
          //  条件判断
           if(res.data.code == 200){
            this.$message.success(msg)
             this.list = list;
             console.log(list)
            //  list.map((v)=>console.log(v))
           } else {
             this.$message.error(msg)
           }
          
    }, 
    // 移入时让他的值等于index，atvie：index是把背景色给哪个下标值
    activeList(index){
      console.log(index)
       this.isActive = index;
     },
    //  移出时让他的值等于null
      mouseLeave(){
         this.isActive = null;
      }
  },
  mounted:function() {
     this.loadList()
   },

}
</script>
<style>
 table{
   /* height: 500px; */
   width: 100%;
  border-collapse:collapse;
 }
 td,th{
   border:1px solid #ebeef5;
   font-weight: normal;
}
 tr,table,th{
   margin: 0;
   padding: 0;
 }
 tr{
   height: 60px;
 }
 td{
  padding-left: 10px;
 }
 .active{
    background:#f5f7fa;
}
</style>
