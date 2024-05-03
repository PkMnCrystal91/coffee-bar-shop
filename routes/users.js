const { Router } = require("express");
const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} = require("../controllers/users");

const router = Router();

router.get("/", getUsers);

router.post("/", postUsers);

router.put("/:id", putUsers);

router.delete("/", deleteUsers);

module.exports = router;
