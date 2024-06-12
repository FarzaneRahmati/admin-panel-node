const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
  addUserValidator(){

     return [
       
        check('identity').not().isEmpty().withMessage('هویت کاربر نامعتبراست'),
        check('role').not().isEmpty().withMessage('نقش کاربر نامعتبراست'),
        check('fullName').not().isEmpty().withMessage('نام کاربر نامعتبراست'),
        check('email').isEmail().withMessage('ایمیل نامعتبراست'),
        check('mobile').not().isEmpty().withMessage('موبایل نامعتبر است '),
        check('address').not().isEmpty().withMessage('آدرس  نامعتبر است '),
     ]
  }

  addAdsValidator(){

   return [
     
      check('categoryId').not().isEmpty().withMessage('دسته مربوطه نامعتبراست'),
      check('userId').not().isEmpty().withMessage(' کاربر مربوطه نامعتبراست'),
      check('title').not().isEmpty().withMessage(' عنوان آگهی نامعتبراست'),
      check('caption').not().isEmpty().withMessage('توضیحات آگهی نامعتبراست'),
     
   ]
}

addCatValidator(){
   return [
     
      check('title').not().isEmpty().withMessage(' عنوان دسته آگهی نامعتبراست'),
      check('caption').not().isEmpty().withMessage('توضیحات دسته آگهی نامعتبراست'),
     
   ]
}

addReqValidator(){

   return [
     
      check('categoryId').not().isEmpty().withMessage('دسته مربوطه نامعتبراست'),
      check('userId').not().isEmpty().withMessage(' کاربر مربوطه نامعتبراست'),
      check('title').not().isEmpty().withMessage(' عنوان آگهی نامعتبراست'),
      check('caption').not().isEmpty().withMessage('توضیحات آگهی نامعتبراست'),
     
   ]
}


}