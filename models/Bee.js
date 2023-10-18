
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beeSchema = new Schema({
Underscoreid:String 



})

module.exports = {
  Bee : mongoose.model('bee', beeSchema),
}

