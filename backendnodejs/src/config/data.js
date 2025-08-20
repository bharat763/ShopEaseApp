import mongoose from "mongoose"
// const MONGODB_URI=process.env.MONGODB_URI
const connectDB= async()=>{
  try {
    await  mongoose.connect(process.env.MONGODB_URI)
    console.log('mongodb is connected sucessfully')
  } catch (error) {
console.error(" mangoDB connection failed",  error.message);
 process.exit(1)
    
  }
}
export default connectDB
