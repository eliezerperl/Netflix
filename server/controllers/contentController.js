const Content = require('../models/Content.js');

const getContent = async (req, res) => {
  const content = await Content.find();
  if (!content) res.status(404).send();
  res.status(200).send(content);
};

const getMovies = async (req, res) => {
  const movies = await Content.find({
    isSeries: false,
  });
  if (!movies) res.status(404).send();
  res.status(200).send(movies);
};

const getSeries = async (req, res) => {
  const series = await Content.find({
    isSeries: true,
  });
  if (!series) res.status(404).send();
  res.status(200).send(series);
};

const getContentByTitle = async (req, res) => {
  const { title } = req.params;
  const item = await Content.find({
    title,
  });
  if (!item) res.status(404).send();
  res.status(200).send(item);
};

module.exports = { getContent, getMovies, getSeries, getContentByTitle };
