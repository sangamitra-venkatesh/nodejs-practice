const express = require("express");
const cors = require ("cors")
const app = express();
const options = {origin:"*"}
app.use(cors(options))
app.use(express.json())
let studentdata=[{'name': "swey",'age': 19,'rollnumber':321 },]
app.get("/",(req,res)=>{
    res.send(studentdata)
})

app.post("/",(req,res)=>{
    studentdata.push(req.body)
    console.log(req.body)
    res.send("done")
})

const data=['name:maxin','age:19','hobbies:dancing']
app.get('/',(req,res)=>{
    res.send(data)

})

app.listen(3333,()=>{
    console.log("started")
})