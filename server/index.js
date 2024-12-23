const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const seedRouter = require('./routes/seedRouter.js');
const userRouter = require('./routes/userRouter.js');
const contentRouter = require('./routes/contentRouter.js');

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
const corsOptions = {
  origin: ['http://localhost:5173', 'https://netflicks-web.vercel.app'],
};

app.use(cors(corsOptions));
app.use(express.json()); // parses JSONs
app.use(express.urlencoded({ extended: false })); //this is common practice for urlencoded
// these three lines are boilerplate

//middleware
//routes:
app.use('/api/v1/seed', seedRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/content', contentRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(PORT, () => {
      console.log('listening on ' + PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
