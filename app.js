// const http=require("http")
// http.createServer((req,res)=>{
//     res.write("Hello, I am a HTTP server1")
//     res.end()
// }).listen(3000,()=>{console.log(`Server is running`)})
const fs=require("fs")
const path=require("path")
// fs.mkdir(path.join(__dirname,"Ramayana"),(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Folder created Sucessfully")
//     }
// })
// fs.mkdirSync(path.join(__dirname,"Mahabaratam"))
// fs.readdir(path.join(__dirname),(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// fs.readdir(path.join(__dirname),{recursive:true},(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// fs.rename(path.join(__dirname,"Ramayana"),path.join(__dirname,"Ramayan part-1"),(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Renamed sucessfully")
//     }
// })
// fs.rmdir(path.join(__dirname,"Mahabaratam"),{recursive:true},(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("The file deleted")
//     }
// })
function write(filename, payload) {
    fs.writeFile(path.join(__dirname,"company", filename), JSON.stringify(payload), (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("file created successfully")
            }
        }) 
}

function createFile (filename, payload){
    const check = fs.existsSync(path.join(__dirname, "company"))
    if(check){
        console.log("folder exists and creating file")
        write(filename, payload)
    }else{
        const create = fs.mkdirSync(path.join(__dirname,"company"))
        if(!create){
            console.log("folder created successfully and creating file")
           write(filename, payload) 
        }
    }

}   

createFile("employee.json", [{name:"tom"},{name:"jerry"}])