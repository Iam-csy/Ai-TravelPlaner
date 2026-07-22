
import express  from "express";

const app=express();
import ask from"./services/AskLLM.js"

app.get("/",(req,res)=>{

    res.send("hi hellow world");
})

app.get("/travel",(req,res)=>{

    const {city}=req.query;

    const response=ask(city);

    res.send(response);




})



app.listen(3000,()=>{
    console.log("server run in 3000");
})