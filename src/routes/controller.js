const autoBind = require('auto-bind');
// const userModel = require('../models/auth/user');
const UserModel = require('../models/user');
const AdvertisingModel = require('../models/advertising');
const CategoryModel = require('../models/category');
const RequestModel = require('../models/request');
const RegisterModel = require('../models/register');
const {validationResult} = require('express-validator');
module.exports = class{

    constructor(){
        autoBind(this);
          this.UserModel = UserModel;
          this.AdvertisingModel = AdvertisingModel;
          this.CategoryModel = CategoryModel;
          this.RequestModel = RequestModel;
          this.RegisterModel = RegisterModel;
         
           
    }

    validationBody(req,res){
        const result = validationResult(req);
        if(!result.isEmpty()){
            const errors = result.array();
            const messages = [];
            errors.forEach(err => messages.push(err.msg));
            this.response(
                {
                    res,
                    code:400,
                    message:"خطای اعتبارسنجی اطلاعات ورودی",
                    data:messages,
                })
            return false;
        }
        return true;
    }

    validate(req,res,next){
        if(!this.validationBody(req,res)){
            return;
        }
        next();
    }

    response({res,code=200,message,data={}}){
         res.status(code).json({
            message,
            data
         });

    }

 
}