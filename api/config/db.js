const mongoose = require("mongoose");

//mongoDB Connect
const mongoDBConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Database is connected`.bgCyan.black);
  } catch (error) {
    console.log(`${error.massage}`.bgCyan.black);
  }
};

//mongoDB Export
module.exports = mongoDBConnect;
