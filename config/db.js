const MONGO_URI = process.env.MONGO_URI
import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log("Database connected")
    }
    catch(err){
        console.error(err);
    }
}

export default connectDB;