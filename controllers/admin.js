const mongoose = require("mongoose");
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.addAdmin = async (req, res) => {
  try {
    const { name, Password, Email } = req.body;

    const Emailfound = await Admin.findOne({ Email: req.body.Email });

    if (Emailfound) {
      return res
        .status(400)
        .send({ errors: [{ msg: "admin already exists !" }] });
    }
    const newAdmin = new Admin({ name, Password, Email });
    //hashing Password //
    const salt = 10;
    const hash = await bcrypt.hash(Password, salt);
    newAdmin.Password = hash;
    await newAdmin.save();

    //**Add token */
    const token = jwt.sign({ id: newAdmin._id }, process.env.TOKEN_KEY);
    console.log(token);
    newAdmin.token = token;
    await newAdmin.save();

    res.status(201).send({ msg: "Admin added successfully", newAdmin, token });
  } catch (err) {
    res.status(400).send({ msg: "Admin cannot be added " + err });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!(Email && Password)) {
      return res.status(400).send({ error: [{ msg: " inputs are required" }] });
    }
    const userfound = await Admin.findOne({ Email: req.body.Email });
    if (!userfound) {
      return res.status(400).send({ error: [{ msg: "bad credentials" }] });
    }
    //Compare Passwords :
    const compare = await bcrypt.compare(Password, userfound.Password);
    if (compare) {
      token = jwt.sign({ id: userfound._id }, process.env.TOKEN_KEY, {
        expiresIn: "1days",
      });
      return res
        .status(201)
        .send({ msg: "Happy to see you", userfound, token });
    } else {
      return res.status(403).send({ error: [{ msg: "bad credentials" }] });
    }
  } catch (error) {
    return res.status(400).send({ error: [{ msg: "bad credentials" }] });
  }
};

exports.Current = async (req, res) => {
  if (req.user) {
    user = await Admin.findOne({ _id: req.user.id });
    res.status(201).send({ msg: `Welcome ! ${user.name}` });
  }
};
