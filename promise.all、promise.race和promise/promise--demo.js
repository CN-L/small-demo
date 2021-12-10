function findName(){
    console.log("name");
    return new Promise(function(resolve,reject){
             setTimeout(()=>{
                 resolve("河北")
             })
    })
}
function findAge(){
    console.log("18岁")
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("haddpend")
        })
    })
}
findName()
  .then((data)=>{
    console.log(data)//河北
    return findAge();
})
  .then((data)=>{
   console.log(data);
   return;
  })
