const jwt = require('jsonwebtoken');
const config = require('config');
const RegisterModel = require('../models/register');

async function isLoggined(req,res,next){
    const token = req.header("x-auth-token");
    if(!token){res.status(401).send('عدم دسترسی ');}
    try{
         const decoded = jwt.verify(token,config.get("jwt_key"));
         const user = await RegisterModel.findById(decoded._id);
         console.log(user);
         req.user = user;
         next();
    }catch(ex){
         res.status(400).send('توکن نامعتبر ');
    }
}

async function isAdmin(req,res,next){
    if(!req.user.isAdmin) res.status(403).send('عدم دسترسی ');
    next();
}

module.exports = {
    isLoggined,isAdmin
}