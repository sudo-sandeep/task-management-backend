import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file to cloudinary
    const file = await cloudinary.uploader.upload(
        localFilePath,
        { resource_type:"auto" },
        function (error, result) {
          console.log(result);
        }
      );
      //file has been successfully uploaded
      console.log("File has been sucessfully uploaded : ",file.url)
      return file
  } catch (error) {
    fs.unlinkSync(localFilePath) //remove the locally saved file;
    return null
  }
};

export {uploadOnCloudinary}
