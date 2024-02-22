import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../utils/utils.js';

const signin = async (req, res) => {
  const { password: pwdFromWebsite, email } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    if (bcrypt.compareSync(pwdFromWebsite, user.password)) {
      res.status(200).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid Credentials' });
};

const signup = async (req, res) => {
  const { username, email, password, profilePicture } = req.body;

  const newUser = new User({
    username,
    email,
    password: bcrypt.hashSync(password),
    profilePicture,
  });

  const user = await newUser.save();

  res.status(201).send({
    _id: user._id,
    username: user.username,
    email: user.email,
    profilePicture: user.profilePicture,
    token: generateToken(user),
  });
};

const refreshToken = async (req, res) => {
  const { _id, username, email, profilePicture } = req.body;

  const user = {
    _id,
    username,
    email,
    profilePicture,
  };

  if (user) {
    res.status(200).send({
      newToken: generateToken(user),
    });
    return;
  }
  res.status(401).send({ message: 'Invalid Request to Refresh Token' });
};

export { signin, signup, refreshToken };
