const express=require('express')
const bodyparser=require('body-parser')
const Producer=require('./producer')


const producer=new Producer()
const app=express()

app.use(bodyparser.json("application/json"))
app.post("/sendLog",async(req,res,next)=>{
    await producer.publishMessage(req.body.logType,req.body.message)
    res.send()
})
app.listen(3009,()=>{
     console.log("connected in 3000");
})