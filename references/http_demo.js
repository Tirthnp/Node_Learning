const http=require('http')

// Creating server obj

http.createServer((req,res)=>{
    //Write response
    res.write('Hello World');
    res.end()
}).listen(5000, ()=>console.log('Server running....'));