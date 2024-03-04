const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const seedRouter = require('../routes/seedRouter.js');
const userRouter = require('../routes/userRouter.js');
const contentRouter = require('../routes/contentRouter.js');

dotenv.config();
// const PORT = process.env.PORT || 8080;

const app = express();
const corsOptions = {
  origin: ['https://elisnetflix.netlify.app'],
};

app.use(cors(corsOptions));
app.use(express.json()); // parses JSONs
app.use(express.urlencoded({ extended: false })); //this is common practice for urlencoded
// these three lines are boilerplate

//middleware
//routes:
// app.use('/.netlify/functions/api/v1/seed', seedRouter);
app.use('/.netlify/functions/api/v1/users', userRouter);
app.use('/.netlify/functions/api/v1/content', contentRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

export const handler = serverless(app);
