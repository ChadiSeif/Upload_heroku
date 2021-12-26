const { Router } = require("express");
const express = require("express");
const db = require("./db");
const router = express.Router();
const { addUser, loginUser, CurrentUser } = require("../controllers/user");
const { validator, validBody } = require("../middlewares/loginValidator");
const isAuth = require("../middlewares/auth");

// router.use = express.json();

// router.post("/:id", (req, res) => {
//   try {
//     const user = {
//       id: req.params.id,
//       name: req.body.name,
//       age: req.body.age,
//     };
//     found = db.some((user) => user.id == req.params.id);
//     console.log(found);
//     if (found) {
//       res.status(403).send({ msg: "user already found" });
//     } else {
//       db.push(user);
//       res.status(201).send({ msg: "user added successfully", db });
//     }
//   } catch (error) {
//     res.status(400).send({ msg: "cannot add this user" });
//   }
// });

//** Description : adduser*/
//** Method : post*/
//** Path : /addUser*/
router.post("/addUser", addUser);

//** Description : login*/
//** Method : post*/
//** Path : /loginUser*/
router.post("/loginUser", validBody(), validator, loginUser);

//** Description : User is authenticated*/
//** Method : get*/
//** Path : /CurrentUser*/
router.get("/CurrentUser", isAuth, CurrentUser);

module.exports = router;
