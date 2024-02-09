import Content from '../models/Content.js';
import User from '../models/User.js';
import { data } from '../netflix_data.js';

const seedData = async (req, res) => {
  await Content.deleteMany();
  await User.deleteMany();

  await User.insertMany(data.users);
  await Content.insertMany(data.content);
  res.status(201).send({ data: data });
};

export default seedData;
