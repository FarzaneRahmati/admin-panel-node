const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const adminRouter = require('./admin');
const {isLoggined,isAdmin} = require('../middlewares/auth')
const error = require('../middlewares/error');

router.use('/auth',authRouter);
router.use('/admin',adminRouter);



router.use(error);

module.exports = router;