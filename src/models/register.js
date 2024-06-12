const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
  name:{type:String,minlength:3,maxlength:30},
  lastName:{type:String,required:true,minlength:3,maxlength:30},
  email:{type:String,required:true},
  password:{type:String,required:true,minlength:8},
  isAdmin:{type:Boolean,default:false,required:true}
});

const RegisterModel = mongoose.model('Registered',regSchema);

module.exports = RegisterModel;