const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Online!!");
  } catch (error) {
    throw new Error("Database colapsed!!");
  }
};

module.exports = {
  dbConnection,
};
