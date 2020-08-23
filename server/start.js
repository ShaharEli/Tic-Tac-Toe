const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static("../client/build"))
const fs = require('fs').promises

app.get("/api/v1/records",async (req,res)=>{
    const data = await fs.readFile("./records1.json")
    const data1 =JSON.parse(data)
    res.send(data1)
})

app.post("/api/v1/record", async (req,res)=>{
    try{
    const data =  await fs.readFile("./records1.json")
    let data1 =JSON.parse(data)
    data1.push(req.body)
    data1=JSON.stringify(data1)
    await fs.writeFile("./records1.json",data1)
    res.send("done")
    }
    catch(e){console.log(e)}
})


module.exports=app