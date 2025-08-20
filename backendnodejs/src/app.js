
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import products from './routes/products.js'
import auth from './routes/auth.js'
import connectDB from './config/data.js'
import logger from './middlewares/logger.js'
import cookieParser from 'cookie-parser'
import connectCloudinary from './config/connectCloudinary.js'
import multer from 'multer'

const app=express()
app.use(express.json())
dotenv.config();
const PORT=process.env.PORT
app.use(logger)
app.use(cookieParser())
connectDB()
connectCloudinary()
const upload = multer({storage:multer.memoryStorage()})
app.use(cors(
    {
      origin:process.env.APP_URL||'http://localhost:3000',
      credentials: true 
    }
))

app.get('/',(req,res)=>{
    res.json({
        appName:"backendnodejs",
        version:"1.0.01",
        port:PORT,
    })
})

app.use('/api/products',products )
app.use('/api/auth', upload.single("image"), auth)

app.listen(PORT,()=>{
    console.log(`server is running is port ${PORT}`)
})

