// 示例一 this最终指向的是调用它的对象，这里的函数a实际是被Window对象所点出来的
//在严格版中的默认的this不再是window，而是undefined
function a() {
  const user = '追梦子'
    console.log(this.user) //undefined
    console.log(this) //window
}
a()
//以下代码可证明
function a(){
    var user = "追梦子";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
window.a();

// 示例二 this的指向在函数创建的时候是决定不了的，在调用的时候才能决定，谁调用的就指向谁 this指向o
var o = {
    user:"追梦子",
    fn:function(){
        console.log(this.user);  //追梦子
    }
}
o.fn();

// 示例三 证明是o调用了fn 所以this.指向o
var o = {
    user:"追梦子",
    fn:function(){
        console.log(this.user); //追梦子
    }
}
window.o.fn();
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12 this指向了对象b
        }
    }
}
o.b.fn();
// 示例四 构造函数版this
function Fn() { //相当于复制了一份Fn实例到对象a里
    this.user = '李世民'
}
var a1 = new Fn()
console.log(a1.user) //李世民
/*解释 遇到return 如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例*/
// 构造函数1.0
function fn()
{
    this.user = '唐太宗';
    return {}; //this指向此空对象
}
var a2 = new fn;
console.log(a2.user); //undefined
//构造函数1.1
function fn()
{
    this.user = '朱元璋';
    return function(){};
}
var a3 = new fn;
console.log(a3.user); //undefined
// 构造函数1.2 还是指向了原来的实例
function fn()
{
    this.user = '嬴政';
    return 1;
}
var a4 = new fn;
console.log(a4.user); //嬴政

function fn()
{
    this.user = '汉高祖';
    return undefined;
}
var a5 = new fn;
console.log(a5.user); //汉高祖

function fn()
{
    this.user = '追梦子';
    return undefined;
}
var a6 = new fn;
console.log(a6); //fn {user: "追梦子"}
//构造函数1.3 虽然null也是对象，但是在这里this还是指向那个函数的实例，因为null比较特殊
function fn()
{
    this.user = '追梦子';
    return null;
}
var a7 = new fn;
console.log(a7.user); //追梦子