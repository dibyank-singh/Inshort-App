
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config()
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./connection/db.js";
import defaultdata from "./Basedata/Datafile.js";
import Router from "./Allroute/route.js"
import path from "path";
import webpush from "web-push"
const app=express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))  

const Port= process.env.PORT || 5000;
app.use( Router)  

// // Deploying statement for heroku 

var __dirname= path.resolve()

if(process.env.NODE_ENV ==="production"){ 
    app.use(express.static(path.join(__dirname ,"/client/build")))
 
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
} else {
    app.get("/",(req , res)=>{
        res.send("api server is running test ")
    })
}

connect();

app.listen( Port , ()=> console.log(`Server is runnning at ${Port}`) )
defaultdata();
 


