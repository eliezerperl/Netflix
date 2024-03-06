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

const getContentBySearch = async (req, res) => {
  const { query } = req.params;
  const regex = new RegExp(query, 'i'); //includes anywhere in the string; for startsWith-new RegExp(`^${query}`, 'i')

  const items = await Content.find({
    $or: [{ genre: { $regex: regex } }, { title: { $regex: regex } }],
  });
  if (!items) res.status(404).send();
  res.status(200).send(items);
};

module.exports = {
  getContent,
  getMovies,
  getSeries,
  getContentByTitle,
  getContentBySearch,
};
