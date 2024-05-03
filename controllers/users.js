const { request, response, query } = require("express");
const User = require("../models/user");

const getUsers = (req, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

  res.status(200).json({
    msg: "get API",

    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const postUsers = async (req = request, res = response) => {
  const body = req.body;

  const user = new User(body);

  await user.save();

  res.status(201).json({
    user,
  });
};

const putUsers = (req = request, res = response) => {
  res.status(200).json({
    msg: "put API",
  });
};

const deleteUsers = (req = request, res = response) => {
  res.status(200).json({
    msg: "delete API",
  });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
};
