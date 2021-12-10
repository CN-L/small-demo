function fun(n, o) {
    console.log(o); //undefind n为0 n1 o0 2
    return {
        fun: function(m) {
            return fun(m, n);// m 1 n 0
        }
    };
}

var a = fun(0); // ?undefind 因为0赋值给了n
a.fun(1); //
a.fun(2); // ? 2
a.fun(3); // ? 3
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1); // ?
c.fun(2); // ?
c.fun(3); // ?