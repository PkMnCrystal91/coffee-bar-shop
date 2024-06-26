const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    require: [true, "Please enter a name"],
  },
  email: {
    type: String,
    require: [true, " Please enter an email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please enter a password"],
  },
  img: {
    type: String,
  },
  google: {
    type: Boolean,
    default: false,
  },
  rol: {
    type: String,
    require: true,
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

module.exports = model("User", UserSchema);
