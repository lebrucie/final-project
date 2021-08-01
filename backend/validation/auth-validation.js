const { body } = require("express-validator");
const User = require("../models/User");

const registerValidation = (req, res) => {
  return [
    body("email")
      .not()
      .isEmpty()
      .withMessage("Email Required")
      .isEmail()
      .withMessage("Invalid Email")
      .custom((email) => {
        return User.findOne({ email }).then((user) => {
          if (user) {
            return Promise.reject("Email already registered");
          }
        });
      }),

    body("password", "Invalid Password")
      .not()
      .isEmpty()
      .withMessage("Password Required")
      .isLength({ min: 8 })
      .withMessage("Password requires at least 8 characters")
      .trim(),
  ];
};

const loginValidation = (req, res) => {
  return [
    body("email")
      .not()
      .isEmpty()
      .withMessage("Email Required")
      .isEmail()
      .withMessage("Invalid Email")
      .custom((email) => {
        return User.findOne({ email }).then((user) => {
          if (!user) {
            return Promise.reject("Email not found in database");
          }
        });
      }),

    body("password", "Invalid Password")
      .not()
      .isEmpty()
      .withMessage("Password Required")
      .isLength({ min: 8 })
      .withMessage("Password requires at least 8 characters")
      .trim(),
  ];
};

module.exports = { registerValidation, loginValidation };
