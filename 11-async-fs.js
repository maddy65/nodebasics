const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err,res) =>{
    if(err){
        console.log(err);
        return;
    }else{
        const first = res;
        readFile('./content/second.txt','utf8',(err,res)=>{
            if(err){
                console.log(err);
                return;
            }else{
                const second = res;
                writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`, (err,result) =>{
                    if(err){
                        console.log(err)
                        return
                    }else{
                        console.log(result);
                    }
                })
            }
        })
       
    }
});