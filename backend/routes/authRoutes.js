const { Router } = require("express");
const authController = require("../controllers/authController");
const {
  registerValidation,
  loginValidation,
} = require("../validation/auth-validation");
const router = Router();

router.post("/signup", registerValidation(), authController.signup_post);
router.post("/login", loginValidation(), authController.login_post);

module.exports = router;
