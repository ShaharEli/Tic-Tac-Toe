const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static("../client/build"))
const fs = require('fs').promises
let path = process.env.MY_VARIABLE||"./records.json"

app.get("/api/v1/records",async (req,res)=>{
    const data = await fs.readFile(path)
    const data1 =JSON.parse(data)
    res.send(data1)
})

app.post("/api/v1/record", async (req,res)=>{
    try{
    const data =  await fs.readFile(path)
    let data1 =JSON.parse(data)
    data1.push(req.body)
    data1=JSON.stringify(data1)
    await fs.writeFile(path,data1)
    res.send("done")
    }
    catch(e){console.log(e)}
})


app.listen(process.env.PORT||8080,()=>console.log("listening on port 8080"))
module.exports=app
