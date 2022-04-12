// new
function myNew(fn, ...args) {
  let obj =  {
    __proto__: fn.prototype
  }
  fn.apply(obj, args)
  return obj
}

// function Person (name, age) {
//   this.name = name ;
//   this.age = age
// }

// let _person = myNew(Person, 'huang', '21')
// console.log(_person)

// bind
Function.prototype.customeBind = function(thisArg,...list){
  let self = this; // 目标函数
  
  // 自己实现的bind函数，如果把返回的新函数当成了构造函数，此时会遇到问题，
  // 就是找不到目标函数原型上的方法
  // 解决：让新函数继承目标函数的原型
  let Bound = function(...arg2){
    self.apply(thisArg,[...list,...arg2])
  }
  // 以某个对象作为原型创建一个新的对象出来
  Bound.prototype = Object.create(self.prototype);
  Bound.prototype.custructor = self;

  return Bound;
}

function Msql(name) {
 this.name = name
}
let b = new Msql('uuuu')