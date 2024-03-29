Promise.all = function (iterator) {
    let count = 0//用于计数，当等于len时就resolve
    let len = iterator.length
    let res = []//用于存放结果
    return new Promise((resolve,reject) => {
        for(let i in iterator){
            Promise.resolve(iterator[i])//先转化为Promise对象
                .then((data) => {
                    res[i] = data;
                    if(++count === len){
                        resolve(res)
                    }
                })
                .catch(e => {
                    reject(e)
                    console.log(e)
                })
        }
    })
}
var promise1 = Promise.resolve(3);
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});
var promise3 = 42;
var promise4 = Promise.reject(23);
var promise5 = Promise.reject(24);

Promise.all([promise1,promise5, promise2, promise3, promise4])
    .then(function(values) {
    console.log(values);
}).catch(error => {
    console.log(error)
})
