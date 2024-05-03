const { request, response, query } = require("express");

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

const postUsers = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.status(200).json({
    msg: "post API",

    nombre,
    edad,
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
