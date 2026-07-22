
import express  from "express";

const app=express();

import {AskLLM} from"./services/AskLLM.js"

app.get("/",(req,res)=>{

    res.send("hi hellow world");
})

app.get("/travel",(req,res)=>{



    const response=AskLLM(req.query);

    res.send(response);




})



app.listen(3000,()=>{
    console.log("server run in 3000");
})