import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import {
  addToList,
  doesExist,
  refreshToken,
  removeFromList,
  signin,
  signup,
} from '../controllers/userController.js';
import { isAuth } from '../utils/utils.js';

const userRouter = express.Router();
userRouter.post('/signup', expressAsyncHandler(signup));
userRouter.post('/signin', expressAsyncHandler(signin));
userRouter.post('/doesexist', expressAsyncHandler(doesExist));
userRouter.post('/addtolist', expressAsyncHandler(addToList));
userRouter.post('/removefromlist', expressAsyncHandler(removeFromList));
userRouter.post('/refresh-token', isAuth, expressAsyncHandler(refreshToken));

module.exports = userRouter;
