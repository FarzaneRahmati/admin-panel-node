const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    title:{type:String,required:true,minlength:3},
    caption:{type:String,required:true,minlength:3},
    date:{type:String,default:new Date().toLocaleDateString('fa-ir')},
    

});

const CategoryModel = mongoose.model('category',catSchema);

module.exports = CategoryModel;