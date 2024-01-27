//const detailsme=require("./module")
//const clc = require("cli-color")
//const os=require("os");
//require("dotenv").config()



const http=require("http")

//detailsme.greet("zac","america")
//console.log(clc.redBright(detailsme.age))
//console.log(clc.bgBlackBright(detailsme.Qualification))

//console.log(detailsme.name)
//console.log(detailsme.age)
http.createServer((req,res)=>{
    if(req.url==="/"){
    res.writeHead(200,{
      
        "Content-Type":"text/html"
        //"Content-Type":"text/json"
    })
    res.end("<h1>Hey sir</h1>")
}
    else{
        res.writeHead(404,
            {
                "Content-Type":"text/html"
            })
            res.end("<h1>404 Error</h1>")
            
    }
}).listen(8080)
// }).listen(process.env.PORT,()=>{
// console.log("server is running "+process.env.PORT )
// })

///setInterval(() => {
    //console.log("hey")
//}, 5000);
//console.log(os.type());
//console.log(os.arch());
//console.log(os.platform());
//console.log(os.totalmem());
//console.log(os.freemem());



