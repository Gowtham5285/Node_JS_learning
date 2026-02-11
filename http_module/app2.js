const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("Node JS server Response!")
    res.end("  Hello!")
})
server.listen(8000,()=>console.log("Server started at the port 8000"))