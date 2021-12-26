const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  Name: { type: String, default: "admin" },
  Password: { type: String },
  Email: { type: String },
});

module.exports = Admin = mongoose.model("Admin", adminSchema);
