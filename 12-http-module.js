const { read } = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short History ')
    }
    res.end(
        `
        <h1>OOPS!</h1>
        <p>page doesn't exist</p>
        <a href = "/" > back home </a>
        `
    )
    
})


server.listen(5000);