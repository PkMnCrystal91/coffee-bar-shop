const Role = require("../models/role");

const roleValidator = async (role = "") => {
  const rolExist = await Role.findOne({ role });
  if (!rolExist) {
    throw new Error(`${role} is not valid!`);
  }
};

module.exports = {
  roleValidator,
};
