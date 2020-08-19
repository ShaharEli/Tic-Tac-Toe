const express = require("express")
const app = express()
app.use(express.json())
const fs = require('fs').promises
app.get("/api/v1/records",async (req,res)=>{
    const data = await fs.readFile("./records.json")
    const data1 =JSON.parse(data)
    res.send(data1)
})
app.post("/api/v1/record", async (req,res)=>{
    try{
    const data =  await fs.readFile("./records.json")
    let data1 =JSON.parse(data)
    data1.push(req.body)
    data1=JSON.stringify(data1)
    fs.writeFile("./records.json",data1)
    res.send("done")
    }
    catch(e){console.log(e)}
})



app.listen(process.env.PORT||8080)