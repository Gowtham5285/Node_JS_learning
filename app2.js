const http=require("http")
http.createServer((req,res)=>{
    res.write("Hello, I am a HTTP server2")
    res.end()
}).listen(8002,()=>{console.log(`Server is running`)})