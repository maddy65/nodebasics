const { writeFileSync } = require("fs")

for(var i=0; i<1000; i++){
    writeFileSync('../../content/bigfile.txt',`hello world ${i}\n`, {flag : 'a'})
}