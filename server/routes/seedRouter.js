const express = require("express");
const seedData = require("../controllers/seedController.js");

const seedRouter = express.Router();
seedRouter.get('/', seedData);

module.exports = seedRouter