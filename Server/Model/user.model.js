const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    memberName : String,
    rank : String,
    church: String,
    memberImage: String
})


const userModel = mongoose.model('user_tb', userSchema)

module.exports = { userModel }