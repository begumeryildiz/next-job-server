const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});
 
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ['jpg', 'jpeg', 'png'],
    folder: "next-job" // The name of the folder in cloudinary
    // resource_type: "raw", // => this is in case you want to upload other types of files, not just images
  }
});
 
function uploadFile(req, res, next) {
    const upload = multer({ storage }).single('image');
  
    upload(req, res, function (err) {
        if (err) {
            // An unknown error occurred when uploading.
            return res.status(400).json( {
              message:  "An error occurred while uploading your image. Check your file format and size. Only jpeg, jpg and png formats allowed."
            });
        }
        // Everything went fine. 
        next()
    })
  };
  
  module.exports = uploadFile;