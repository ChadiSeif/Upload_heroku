const { body, validationResult } = require("express-validator");

exports.validBody = () => [
  body("Email").isEmail().withMessage("please correct your Email"),
  body("Email").notEmpty().withMessage("please enter your Email"),
  body("Password")
    .isLength({
      min: 2,
      max: 20,
    })
    .withMessage("Password must have more than 5 characters"),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
