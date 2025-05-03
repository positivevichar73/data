const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});


exports.Profileimg = async (imgBuffer) => {
    try {

        const base64Image = imgBuffer.toString('base64')
        const dataurl = `data:image/png;base, ${base64Image}`;

        const uploadResult = await cloudinary.uploader.upload(dataurl);
        console.log(uploadResult)

        return { public_id: uploadResult.public_id, secure_url: uploadResult.secure_url };
    }
    catch (e) {
        console.log(e.message);
    }
};