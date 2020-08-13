// 立即执行函数形式
- function add(test) {
 console.log(test)
}(1);
+ function add(test) {
  console.log(test)
}(2);
! function add(test) {
  console.log(test)
}(3);
(function add(test) {
  console.log(test)
 })(4);
(function add(test) {
   console.log(test)
 }(5))
var fn = function(test) {
  console.log(test)
}(6)
