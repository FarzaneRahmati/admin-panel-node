const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  identity:{type:String,required:true},
  role:{type:String,required:true},
  fullName:{type:String,required:true},
  email:{type:String,required:true},
  mobile:{type:String,required:true,minlength:11,maxlength:11},
  address:{type:String,required:true},
  date:{type:String,default:new Date().toLocaleDateString('fa-ir')},
  isActive:{type:Boolean,default:false},
  isAccepted:{type:Boolean,default:false},
});

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;