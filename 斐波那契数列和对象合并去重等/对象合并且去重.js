// 两个对象合并去重组成新对象
	var object1 = {
		a:2,
		b:3
	}
	var object2 = {
		a:2,
		b:3,
		c:4
	}
	var object3 = {...object1,...object2};

/*数组中对象去重*/
	var arr = [{
	      key: '01',
	      value: '乐乐'
	   }, {
	      key: '02',
	      value: '博博'
	   }, {
	      key: '03',
	      value: '淘淘'
	   },{
	      key: '04',
	      value: '哈哈'
	   },{
	      key: '01',
	      value: '乐乐'
	   }];
	   var arr1 = [];
	   for(var i = 0;i<arr.length;i++){
		      var flag = true;
		   	  for(var j = 0 ; j<arr1.length;j++){
		   	  	if( arr [i].key == arr1[j].key){
		   	  	   flag = false;
		   	  	}
		   	  }
		   	  if(flag){
	   	  	    arr1.push(arr[i])
	   	       }
	   	 
	   }
	console.log(arr1)


   // 单一对象内部去重
   var obj3 = {
   	name:"李鱼龙",
   	age:12,
   	school:"渤海学院",
   	name:"李鱼龙"
   }
   var object4 = {};
   for(var item in obj3){
   	 var flag = true;
   	 for(var items in object4){
   	 	if(items == item){
   	 		flag == false;
   	 	}
   	 }
   	 if(true){
   	 	object4[item] = obj3[item];
   	 }
   }
   console.log(object4)