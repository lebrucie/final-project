const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "jwtSecret", { expiresIn: "24hr" });
};
module.exports = generateToken;
