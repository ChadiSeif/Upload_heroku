const Usermodel = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
  try {
    const { Name, Email, Password, Phone } = req.body;
    const user = new Usermodel({ Name, Email, Password, Phone });

    /// hash password
    const salt = 10;
    var hash = await bcrypt.hash(Password, salt);
    user.Password = hash;

    // //Create Token
    const token = await jwt.sign({ id: user._id }, process.env.TOKEN_KEY);

    user.token = token;
    await user.save();

    return res
      .status(201)
      .send({ msg: "User added successfully", user, token });
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const userFound = await Usermodel.findOne({ Email });
    if (!userFound) {
      return res.status(401).send({ errors: [{ msg: "Bad Credentials" }] });
    }
    const saltRounds = 10;
    const compare = await bcrypt.compare(Password, userFound.Password);

    if (compare) {
      var token = jwt.sign({ id: userFound._id }, process.env.TOKEN_KEY, {
        expiresIn: "24h",
      });
      return res
        .status(201)
        .send({ msg: "Connected successfully", userFound, token });
    } else {
      return res.status(401).send({ errors: [{ msg: "Bad Credentials" }] });
    }
  } catch (error) {
    return res.status(401).send({ errors: [{ error: error }] });
  }
};

exports.CurrentUser = async (req, res) => {
  if (req.user) {
    const User = await Usermodel.findOne({ _id: req.user.id });
    return res.status(201).send({ msg: "Welcome", User });
  }
};
