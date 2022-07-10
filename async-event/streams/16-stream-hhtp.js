var http = require('http')
var fs = require('fs')

http.createServer(function(req,res) {
    const text = fs.readFileSync('./content/bigfile.txt','utf8')
    res.end(text )
}).listen(5000)