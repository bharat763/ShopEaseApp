import { v2 as cloudinary } from 'cloudinary';
async function uploaded(file){
 return new Promise((resolve,reject)=>{
    cloudinary.uploader.upload_stream(
        {
        folder:process.env.CLOUDINARY_FOLDER
        },(error,data)=>{
          if(error) return reject(error)
            resolve(data)
        }
     ).end(file.buffer)
   
})
   
}
export default uploaded