const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
  registerValidator(){

     return [
        check('name').not().isEmpty().withMessage('name invalid'),
        check('lastName').not().isEmpty().withMessage('lastName invalid'),
        check('email').isEmail().withMessage('email invalid'),
        check('password').not().isEmpty().withMessage('password invalid'),
        
     ]
  }

  loginValidator(){
    return [
      check('email').isEmail().withMessage('email invalid'),
      check('password').not().isEmpty().withMessage('password invalid')
    ]
  }

}