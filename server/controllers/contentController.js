import Content from '../models/Content.js';

export const getContent = async (req, res) => {
  const content = await Content.find();
  if (!content) res.status(404);
  res.status(200).send(content);
};

export const getMovies = async (req, res) => {
  const movies = await Content.find({
    isSeries: false,
  });
  if (!movies) res.status(404);
  res.status(200).send(movies);
};

export const getSeries = async (req, res) => {
  const series = await Content.find({
    isSeries: true,
  });
  if (!series) res.status(404);
  res.status(200).send(series);
};

export const getContentByTitle = async (req, res) => {
  const { title } = req.body
  console.log(title)
  const item = await Content.find({
    title,
  });
  if (!item) res.status(404);
  res.status(200).send(item);
};