const controller = require('../controller');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = new(class extends controller {

    async register(req,res){
         
       let user = await this.RegisterModel.findOne({email:req.body.email});
       if(user){
         return this.response({res,code:400,message:'نام کاربری تکراری است'});
         
       }

        user = new this.RegisterModel(_.pick(req.body,["name","lastName","email","password","isAdmin"]));
        let salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);

        await user.save();
        this.response({
            res,
            code:200,
            message:"ثبت نام با موفقیت انجام شد",
            data:{user}
            

        })
    }



    async login(req,res){
     
      let user =  await this.RegisterModel.findOne({email:req.body.email});
       if(!user){
          this.response({
            res,code:400,message:'نام کاربری یا رمز ورود نامعتبر است'
         });
       }
       const isValid = await bcrypt.compare(req.body.password,user.password);
       if(!isValid){
         this.response({
            res,code:400,message:'نام کاربری یا رمز ورود نامعتبر است'
         });
       }
       const token = jwt.sign({_id:user.id},config.get("jwt_key"));
       this.response({res,message:'ورود با موفقیت انجام شد',data:{token}});
    }
})();