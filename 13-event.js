const fs = require('fs')

console.log("first task");

fs.readFile('./content/first.txt','utf8',(err,res) =>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(res);
        console.log("completed task");
    }
})
setTimeout (()=>{
   console.log("second task"); 
},0)

console.log("final task")