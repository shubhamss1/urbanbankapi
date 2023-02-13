const express = require("express")
const cors=require("cors")
const {json}=require("express")
const mongoose =require("mongoose")
const acctypesModel=require("./model/acctypesModel")
const branchesModel=require("./model/branchesModel")
const NavModel=require("./model/NavModel")
const app=express();
app.use(cors())
app.use(json())

mongoose.connect("mongodb://127.0.0.1:27017/urbanbankdb")
.then(()=>{
    console.log("mongodb is connect successffully")
})

app.get("/",(req,res)=>{
    res.send("welcome to urban bank")
})

app.get("/bu",(req,res)=>{
    res.send("this is banking unit")
})
app.get("/acctype",async (req,res)=>{
const result=await acctypesModel.find({});
res.json(result);
})
app.get("/branch",async (req,res)=>{
    const result=await branchesModel.find({});
    res.json(result);
});
app.get("/navs",async (req,res)=>{
    const result=await NavModel.find({isactive:true});
    res.json(result)
})

app.listen(2525,()=>{
       console.log("service is running on port 2525.........")
})