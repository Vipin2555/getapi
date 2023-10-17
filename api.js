const express=require("express")
const app=express()
const cors=require("cors")
require("./mongoose")
const student=require("./schema")
app.use(cors())
app.get("/",async (req,resp)=>
{
    const data=await student.find()
    resp.send(data)
})
app.listen(5000)