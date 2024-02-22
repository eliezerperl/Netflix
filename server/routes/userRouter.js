import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { refreshToken, signin, signup } from '../controllers/userController.js';
import { isAuth } from '../utils/utils.js';

const userRouter = express.Router();
userRouter.post('/signup', expressAsyncHandler(signup));
userRouter.post('/signin', expressAsyncHandler(signin));
userRouter.post('/refresh-token', isAuth, expressAsyncHandler(refreshToken));

export default userRouter;
