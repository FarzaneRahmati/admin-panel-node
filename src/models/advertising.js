const mongoose = require('mongoose');
const CategoryModel = require('./category');
const UserModel = require('./user');



const adsSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'CategoryModel',
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'UserModel',
    },
    title:{type:String,required:true},
    caption:{type:String,required:true},
    date:{type:String,default:new Date().toLocaleDateString('fa-ir')},
    isActive:{type:Boolean,default:true},

});

const AdvertisingModel = mongoose.model('advertising',adsSchema);

module.exports = AdvertisingModel;