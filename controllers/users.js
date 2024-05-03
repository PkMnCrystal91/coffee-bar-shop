const { response } = require("express");

const getUsers = (req, res = response) => {
  res.status(200).json({
    msg: "get API",
  });
};

const postUsers = (req = request, res = response) => {
  res.status(200).json({
    msg: "post API",
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
