import mongoose from "mongoose"



const connectDB=async (uri)=>{
    try{
        mongoose.connect( uri  )
        console.log("database connected successfully 👍")

    }catch(error){
        console.log("mongo db connection failed 😓")
    }

}

export default connectDB