// 1 1 2 3 4 5
function fib(n){
    if(n==1||n==2){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
fib(8);

function fn1(n){
	var res1 = 1;
	var res2 = 1;
	var sum = res2;
	for(var i = 2;i<n;i++){
		// 当i=2时 前面两个相加
		sum = res1 + res2;//1 + 1
		res1 = res2;//1
		res2 = sum ;//2
	}
	console.log(sum)
	return sum ;
}
fn1(8);


function fb(n){
    var res = [1,1];
    if(n == 1 || n == 2){
        return 1;
    }      
    for(var i=2;i<n;i++){
        res[i] = res[i-1] + res[i-2];
    }
    return res[n-1];
}
fb(10);