var arry =[
    {
        name:"叶问",
        age:30
    },
    {
        name:"成龙",
        age:39
    },
    {
        name:"霍元甲",
        age:30
    },
    {
        name:"汪苏泷",
        age:30
    }
]
var itemName ="苏"
var result = arry.filter((item)=> {
    // item为每个对象
    return item.name.search(itemName) !==-1
})
console.log(result)