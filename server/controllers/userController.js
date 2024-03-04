const bcrypt = require('bcryptjs');
const User = require('../models/User.js');
const { generateToken } = require('../utils/utils.js');

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
        list: user.list,
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
    list: [],
  });

  const user = await newUser.save();

  res.status(201).send({
    _id: user._id,
    username: user.username,
    email: user.email,
    profilePicture: user.profilePicture,
    token: generateToken(user),
    list: user.list,
  });
};

const doesExist = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    res.status(401).send({
      email,
    });
  } else {
    res.status(200).send({
      email,
    });
  }
};

const addToList = async (req, res) => {
  const { userId, content } = req.body;

  console.log(userId);
  console.log(content);
  const newUser = await User.findByIdAndUpdate(userId, {
    $push: { list: content },
  });

  res.status(200).send({
    newUser,
  });
};

const removeFromList = async (req, res) => {
  const { userId, content } = req.body;

  console.log(userId);
  console.log(content);
  const newUser = await User.findByIdAndUpdate(userId, {
    $pull: { list: { _id: content._id } },
  });

  res.status(200).send({
    newUser,
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

module.exports = { signin, signup, doesExist, addToList, removeFromList, refreshToken };
