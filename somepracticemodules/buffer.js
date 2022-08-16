
/**
 *  Basic Buffer Testing
 */

 var buffer1 = Buffer.alloc(100);
 //var buffer2 = new Buffer('TEST');
 var buffer3 = Buffer.from([1,2,3,4]);
 
 buffer1.write("Happy Learning");
 
 var a = buffer1.toString('utf-8');
 console.log(a);
 
 console.log(Buffer.isBuffer(buffer1))
 console.log(buffer3.length);
 
 var src = Buffer.from("Maddy");
 console.log(src.toString('utf-8'), src.length);
 
 var dist = Buffer.alloc(src.length);
 src.copy(dist);
 
 console.log(dist.toString('utf-8'), "distanation");
 
 var x = Buffer.from("Hello Maddy ");
 var y = Buffer.from("Welcome to Tutorial");
 
 var z = Buffer.concat([x, y]);
 
 console.log(z.toString('utf-8'));
 
 var test = Buffer.from(Buffer.from("Maddy"));
 
 console.log(test.toString('utf-8'));
 
 console.log(z.includes('Welcome'))
 
 