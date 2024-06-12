const controller = require('../controller');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = new(class extends controller {

    async getUsers(req,res){
       let users = [];
       users = await this.UserModel.find({});
       if(users.length == 0){
        return this.response({res,code:400,message:'کاربری وجود ندارد',data:{} }); 
       }

       return this.response({
        res,
        code:200,
        message:'با موفقیت دریافت شد',
        data:{users}
      });
      
    }
    
    // async getUser(req,res){
    //   let user = {}
    //   user = await this.UserModel.find({_id:req.params.id});
    //   if(!user){
    //     return this.response({res,code:400,message:'کاربری وجود ندارد',data:{}}); 
    //    }
    //    return this.response({
    //     res,
    //     code:200,
    //     message:'با موفقیت دریافت شد',
    //     data:{user}
    //   });
    // }
    async addUser(req,res){

        let user = await this.UserModel.findOne({email:req.body.email});
        if(user){
          return this.response({res,code:400,message:'ایمیل تکراری است'});
          
        }

        user = new this.UserModel(_.pick(req.body,["identity","role","fullName","email","mobile","address","date","isActive","isAccepted"]));
        await user.save();
        this.response({
            res,
            code:200,
            message:"کاربر با موفقیت افزوده شد ",
            data:{user}
            

        })
    }
    
    //----------------------------------
    async getAds(req,res){
        
      let ads = [];
      let users =[];
      ads = await this.AdvertisingModel.find({});
      if(ads.length == 0){
       return this.response({res,code:400,message:'آگهی وجود ندارد',data:{} }); 
      }
      users = await this.UserModel.find({});
       
      return this.response({
       res,
       code:200
       ,message:'با موفقیت دریافت شد',
       data:{ads,users}
     });
    } 

   async addAds(req,res){
    let user = await this.UserModel.findOne({_id:req.body.userId});
    if(!user){
      return this.response({res,code:400,message:'کاربر مربوطه وجود ندارد'});
      
    }
    let cat = await this.CategoryModel.findOne({_id:req.body.categoryId});
    if(!cat){
      return this.response({res,code:400,message:'دسته مربوطه وجود ندارد'});
      
    }
    let ads = new this.AdvertisingModel(_.pick(req.body,["categoryId","userId","title","caption","date","isActive"]));
    await ads.save();
    this.response({
        res,
        code:200,
        message:"آگهی با موفقیت افزوده شد ",
        data:{ads}
        

    })
   }
   //------------------------------------------
     async getCategories(req,res){
      let cats = [];
      cats = await this.CategoryModel.find({});
      if(cats.length == 0){
       return this.response({res,code:400,message:'دسته وجود ندارد',data:{} }); 
      }

      return this.response({
       res,
       code:200
       ,message:'با موفقیت دریافت شد',
       data:{cats}
     });
    }

   async addCategory(req,res){
    let cat = new this.CategoryModel(_.pick(req.body,["title","caption","date"]));
    await cat.save();
    this.response({
        res,
        code:200,
        message:"دسته آگهی با موفقیت افزوده شد ",
        data:{cat}
        

    })
   }
   //-------------------------------------------
   async getRequests(req,res){
    let requests = [];
    let users = [];
    requests = await this.RequestModel.find({});
    if(requests.length == 0){
     return this.response({res,code:400,message:'درخواستی وجود ندارد',data:{} }); 
    }
    users = await this.UserModel.find({});
    return this.response({
     res,
     code:200
     ,message:'با موفقیت دریافت شد',
     data:{requests,users}
   });
   }

   async addRequest(req,res){
    let user = await this.UserModel.findOne({_id:req.body.userId});
    if(!user){
      return this.response({res,code:400,message:'کاربر مربوطه وجود ندارد',data:{}});
      
    }
    let cat = await this.CategoryModel.findOne({_id:req.body.categoryId});
    if(!cat){
      return this.response({res,code:400,message:'دسته مربوطه وجود ندارد'});
      
    }
    let request = new this.RequestModel(_.pick(req.body,["categoryId","userId","title","caption","date","isAccepted"]));
    await request.save();
    this.response({
        res,
        code:200,
        message:"درخواست  با موفقیت افزوده شد ",
        data:{request}
        

    })
   }

})();