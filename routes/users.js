const { Router } = require("express");
const { fieldsValidator } = require("../middlewares/fields-validator");
const { check } = require("express-validator");
const { roleValidator, emailExist } = require("../helpers/db-validators");

const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} = require("../controllers/users");

const router = Router();

router.get("/", getUsers);

router.post(
  "/",
  [
    check("name", "Please enter a name").not().isEmpty(),
    check("password", "Password should have more that 6 characters").isLength({
      min: 6,
    }),
    check("email", "This is not a valid email").isEmail(),
    check("email").custom(emailExist),
    check("rol").custom(roleValidator),
    fieldsValidator,
  ],
  postUsers
);

router.put("/:id", putUsers);

router.delete("/", deleteUsers);

module.exports = router;
