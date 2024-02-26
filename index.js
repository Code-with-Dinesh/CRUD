require("dotenv").config()
const express = require("express")
const dbconnection = require("./config/database.js")
const blog = require("./router/blog.js")
const app = express()
// middleware used 
app.use(express.json())
app.use("/api/v1",blog)
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`App listen on ${port}`)
})
app.get("/",(req,res)=>{
    res.send("This is my Home route")
})
dbconnection()