const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");

const getUsers = async (req, res = response) => {
  const { offset = 0, limit = 5 } = req.query;

  const users = await User.find().skip(Number(offset)).limit(Number(limit));

  res.status(200).json({ users });
};

const postUsers = async (req = request, res = response) => {
  const { name, email, password, rol } = req.body;

  const user = new User({ name, email, password, rol });

  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

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
