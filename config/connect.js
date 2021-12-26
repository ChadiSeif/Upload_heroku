const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://seifch:24414870@cluster0.augzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connected successfully to dB");
  } catch (error) {
    console.log("cannot connect to dB" + error);
    process.exit(1);
  }
};

module.exports = connectDb;
