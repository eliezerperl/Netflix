import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth  } from '../utils/utils.js';
import {
  getContent,
  getContentByTitle,
  getMovies,
  getSeries,
} from '../controllers/contentController.js';

const contentRouter = express.Router();
contentRouter.get('/', isAuth, expressAsyncHandler(getContent));
contentRouter.get('/movies', isAuth, expressAsyncHandler(getMovies));
contentRouter.get('/series', isAuth, expressAsyncHandler(getSeries));
contentRouter.get('/:title', isAuth, expressAsyncHandler(getContentByTitle));

export default contentRouter;
