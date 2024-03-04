import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import seedRouter from '../routes/seedRouter.js';
import userRouter from '../routes/userRouter.js';
import contentRouter from '../routes/contentRouter.js';

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
