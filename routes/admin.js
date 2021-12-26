const express = require("express");
const router = express.Router();
const { addAdmin, loginAdmin, Current } = require("../controllers/admin");
const isAuth = require("../middlewares/auth");
const { validator, validBody } = require("../middlewares/loginValidator");

// description : Add admin */
// method : post
// path :/api/admin/add
// data : req.body

router.post("/add", addAdmin);

router.post("/login", validBody, validator, loginAdmin);

router.get("/Current", isAuth, Current);

module.exports = router;
