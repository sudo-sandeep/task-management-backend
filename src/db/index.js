import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnect = async() => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Database Connected!!")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default dbConnect