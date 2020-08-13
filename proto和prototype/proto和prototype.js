/*
以下示例在浏览器中使用
proto（隐式原型）与prototype（显式原型）
每一个函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。
__proto__是每个对象都有的一个属性，而prototype是函数才会有的属性
只有函数function才具有prototype属性。这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）
原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。*/

function A(name, age) {
  this.name = name,
    this.age = age
}
console.log(A.prototype)  // ---> 函数的prototype属性指向原型对象：{}
console.log(A.prototype.constructor)  // ---> 指向函数本身
console.log(A.__proto__.__proto__ === A.prototype.__proto__) //函数为特殊对象 指向构造函数的原型

var b = new A('李世民', 23) //Object类型
console.log(b.__proto__) //指向构造函数的prototype
console.log(b.__proto__.constructor) //指向原构造函数 --可用来区分数组和对象

