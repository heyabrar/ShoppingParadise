const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to mongoDB");
  });
};

module.exports = connection;
