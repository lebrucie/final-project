const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const generateToken = require("../utils/generateToken");

const signup_post = async (req, res, next) => {
  console.log("signup-post");
  const { email, password } = req.body;

  try {
    //Validation
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      const error = new Error("Validation Failed");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    //Create a hash for the newly created password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //Add user to DB
    await User.create({
      email,
      password: hash,
    });

    res.status(200).send("User Successfully Registered");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const login_post = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //Validation
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      const error = new Error("Validation Failed");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }

    //check if user already exists
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email not registered in Database");
    }

    const decodedPassword = await bcrypt.compare(password, user.password);

    if (decodedPassword) {
      res.status(200).json({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Auth failed!");
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = { signup_post, login_post };
