
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
Underscoreid:String , 


userName:String , 


userLevel:Number , 


userChallenges:Number , 


userImagesUploaded:Number , 


userAudioFilesUploaded:Number 



})

module.exports = {
  User : mongoose.model('user', userSchema),
}

