
// 用户数组中的数据过滤  取到相对应的值
var list = [{
    name:"李云龙",
    age:12,
    school:"大同"
},
{
    name:"三毛",
    age:19,
    school:"北大"
},
{
    name:"叶问",
    age:30,
    school:"清华"
},
{
    name:"刘伯温",
    age:300,
    school:"孔子学院"
},{
    name:"李小枪",
    age:40,
    school:"西南联合大学"
}
]
var result = [];
var ary = ["name","age"]
list.map((item)=>{
  ary.map((v)=>{
      result.push(item[v])
  })
})
console.log(result)