const Content = require('../models/Content.js');
const User = require('../models/User.js');
const data = require('../netflix_data.js');

const seedData = async (req, res) => {
  await Content.deleteMany();
  await User.deleteMany();

  await User.insertMany(data.users);
  await Content.insertMany(data.content);
  res.status(201).send({ data: data });
};

module.exports = seedData;
