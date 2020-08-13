// 父类
function Person(name, sex) {
  this.sex = sex
  this.name = name
  this.num = function() {
  }
}
Person.prototype.age = 10 //给构造函数添加原型属性


// 1.原型链继承
/*
 缺点：1、新实例无法向父类构造函数传参。
　　　 2、继承单一。
　　　 3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）
*/
function Per() {
  this.name = 'ker'
}
Per.prototype = new  Person()
console.log(new Per().sex)
var result = new Per()
// console.log(result.age) 10
Person.prototype.age = 11 //此时父类改变了值
console.log(result.age) //从而导致了我新的实例值改变 11


// 借用构造函数继承
/*     特点： 1、只继承了父类构造函数的属性，没有继承父类原型的属性。
　　　　　　　2、解决了原型链继承缺点1、2、3。
　　　　　　　3、可以继承多个构造函数属性（call多个）。
　　　　　　　4、在子实例中可向父实例传参。
　　　　缺点：1、只能继承父类构造函数的属性。
　　　　　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）
　　　　　　　3、每个新实例都有父类构造函数的副本，臃肿。*/
function Con() {
  Person.call(this, 'her', '男'); //con函数继承了Person的属性且传参
  this.age = 12
}
Person.prototype.age = 13 //父类虽发生改变却没有影响继承得函数实例
console.log(new Con().sex)

//组合继承（借助构造函数和原型继承两大方式）
function Sncxy(name) {
  Person.call(this, name)
  this.age = 15
}
Sncxy.prototype = new Person()
