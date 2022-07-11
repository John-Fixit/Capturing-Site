const cloudinary = require('cloudinary')
const { userModel } = require("../Model/user.model")
const jwt = require('jsonwebtoken')


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const upload = (req, res) => {
    const memberName = req.body.memberName
    const rank = req.body.rank
    const church = req.body.church
    const image = req.body.convertedImage
    cloudinary.v2.uploader.upload(image, (err, result)=>{
        if(err){
            res.send({message: `Image not uploaded, Please try again`, status: false})
        }
        else{
            const memberImage = result.secure_url
            const form = new userModel({memberName, rank, church, memberImage })
            form.save((err)=>{
                if(err){
                    res.send({message: `Network error user not yet Registered`, status : false})
                }
                else{
                    res.send({message: `Registratin and uploading successfull`, status: true, memberImage, rank, church, memberName})
                }
            })
        }
    })
}


const home = (req, res) => {
    userModel.find((err, member)=>{
        if(err){
            res.send({message: `Internal server error`, status: false})
        }
        else{
            res.send({message: `Registered members`, status: true, member})
        }
    })
}
const deleteMember=(req, res)=>{
    res.send({message: `Registered members`, status: true, member})
}


module.exports = { upload, home, deleteMember }