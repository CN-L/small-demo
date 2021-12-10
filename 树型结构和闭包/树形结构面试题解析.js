var data = [
    {
        id: 1,
        name: '一级1',
        children: [
            {
                id: 4,
                name: '二级1',
            },
            {
                id: 5,
                name: '二级2',
                children: [
                    {
                        id: 7,
                        name: '三级1',
                    },
                    {
                        id: 8,
                        name: '三级2',
                        children: [
                            {
                                id: 11,
                                name: '四级1',
                            },
                            {
                                id: 10,
                                name: '四级2',
                            },
                        ]
                    },
                    {
                        id: 9,
                        name: '三级3',
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: '一级2',
    },
    {
        id: 3,
        name: '一级3',
        children: [
            {
                id: 6,
                name: '二级3',
                children: [
                    {
                        id: 12,
                        name: '三级4',
                    },
                ]
            },
        ]
    }]
function getParentId(list,id) {
    for (let i in list) {
        if(list[i].id==id){
            return [list[i]]
        }
        if(list[i].children){
            let node=getParentId(list[i].children,id);
            if(node!==undefined){
                return node.concat(list[i])
            }
        }
    }
}
let num = getParentId(data,12)//打印出来就是想要的数据
console.log(num)