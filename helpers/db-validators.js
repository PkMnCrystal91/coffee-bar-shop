const Role = require("../models/role");
const User = require("../models/user");

const roleValidator = async (role = "") => {
  const rolExist = await Role.findOne({ role });
  if (!rolExist) {
    throw new Error(`${role} is not valid!`);
  }
};

const emailExist = async (email = "") => {
  const emailInDb = await User.findOne({ email });
  if (emailInDb) {
    throw new Error(`${email} already registered!!`);
  }
};

module.exports = {
  roleValidator,
  emailExist,
};
