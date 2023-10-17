const express=require("express")
const app=express()
require("./mongoose")
const student=require("./schema")
app.get("/",async (req,resp)=>
{
    const data=await student.find()
    resp.send(data)
})
app.listen(5000)