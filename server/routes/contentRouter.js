import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import {
  getContent,
  getContentByTitle,
  getMovies,
  getSeries,
} from '../controllers/contentController.js';

const contentRouter = express.Router();
contentRouter.get('/', expressAsyncHandler(getContent));
contentRouter.get('/movies', expressAsyncHandler(getMovies));
contentRouter.get('/series', expressAsyncHandler(getSeries));
contentRouter.get('/:title', expressAsyncHandler(getContentByTitle));

export default contentRouter;
