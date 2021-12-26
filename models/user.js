const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  Name: { type: String },
  Email: { type: String },
  Password: { type: String },
  Phone: { type: Number },
});

module.exports = Usermodel = mongoose.model("User", userSchema);
