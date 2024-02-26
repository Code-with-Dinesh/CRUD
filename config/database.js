const mongoose = require("mongoose")
require("dotenv").config()
const dbconnection = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Database connected successfully")
    }).catch((err)=>{
        console.log("Error in DB Connection")
    })
}
module.exports = dbconnection
