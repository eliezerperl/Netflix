const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../utils/utils.js');
const {
  getContent,
  getContentByTitle,
  getMovies,
  getSeries,
  getContentBySearch,
} = require('../controllers/contentController.js');

const contentRouter = express.Router();
contentRouter.get('/', isAuth, expressAsyncHandler(getContent));
contentRouter.get('/movies', isAuth, expressAsyncHandler(getMovies));
contentRouter.get('/series', isAuth, expressAsyncHandler(getSeries));
contentRouter.get('/search/:query', isAuth, expressAsyncHandler(getContentBySearch));
contentRouter.get('/:title', isAuth, expressAsyncHandler(getContentByTitle));

module.exports = contentRouter;
