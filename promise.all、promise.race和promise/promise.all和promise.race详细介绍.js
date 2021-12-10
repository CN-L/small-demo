
let p1 = new Promise((resolve, reject) => {
    resolve('成功了')
})
let p2 = new Promise((resolve, reject) => {
    resolve('success')
})
let p3 = Promise.reject('失败')
//如果全部执行成功则 返回数组形式的报文
Promise.all([p1, p2]).then((result) => {
    console.log(result)               //['成功了', 'success']
}).catch((error) => {
    console.log(error)
})
//失败则返回失败的报文，字符串形式
Promise.all([p1,p3,p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)      // 失败了，打出 '失败'
})

//模拟多个异步
let wake = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${time / 1000}秒后醒来`)
        }, time)
    })
}

let p4 = wake(3000)
let p5 = wake(2000)
//Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的,即使p4比p5晚
Promise.all([p4, p5]).then((result) => {
    console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
}).catch((error) => {
    console.log(error)
})
//哪个先执行完毕先出哪个结果 不论成功失败信息
Promise.race([p4, p5]).then((result)=> {
    console.log(result) //输出2秒后醒来
}).catch((error) => {
    console.log(error)
})