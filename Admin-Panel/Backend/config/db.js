const {default:mongoose}=require("mongoose")

require("dotenv").config()

const dbconnect=async()=>{
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/admin-panel';
    await mongoose.connect(mongoUri)
    console.log("Connected to MongoDB")
}

module.exports=dbconnect;