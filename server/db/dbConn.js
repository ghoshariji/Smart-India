const mongoose = require("mongoose")

const dbURI = process.env.mongoDB 

mongoose.connect(dbURI).then(()=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log("Error to Connect DB" + err)
})