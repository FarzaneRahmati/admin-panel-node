const mongoose = require('mongoose');
const CategoryModel = require('./category');
const UserModel = require('./user');

const reqSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,required:true,
        ref:'CategoryModel'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,required:true,
        ref:'UserModel'
    },
    title:{type:String,required:true},
    caption:{type:String,required:true},
    date:{type:String,default:new Date().toLocaleDateString('fa-ir')},
    isAccepted:{type:Boolean,default:true},
});

const RequestModel = mongoose.model('request',reqSchema);

module.exports = RequestModel;