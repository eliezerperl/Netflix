const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const {
  addToList,
  doesExist,
  refreshToken,
  removeFromList,
  signin,
  signup,
} = require('../controllers/userController.js');
const { isAuth } = require('../utils/utils.js');

const userRouter = express.Router();
userRouter.post('/signup', expressAsyncHandler(signup));
userRouter.post('/signin', expressAsyncHandler(signin));
userRouter.post('/doesexist', expressAsyncHandler(doesExist));
userRouter.post('/addtolist', expressAsyncHandler(addToList));
userRouter.post('/removefromlist', expressAsyncHandler(removeFromList));
userRouter.post('/refresh-token', isAuth, expressAsyncHandler(refreshToken));

module.exports = userRouter;
