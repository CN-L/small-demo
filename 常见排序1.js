let arr = [5, 3, 6, 9,10, 30, 1 ,0 ,7]
let arr1 = []
let num;
for(var i = 0; i < arr.length - 1;i++){
   for(var j = 0; j < arr.length - 1; j++) {
       if(arr[j] > arr[j+1]) {
           let num = arr[j+1]
           arr[j+1] = arr[j]
           arr[j] = num
       }
   }
}
console.log(arr)