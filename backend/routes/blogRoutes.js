const { Router } = require("express");
const blogController = require("../controllers/blogController");
// const {
//   registerValidation,
//   loginValidation,
// } = require("../validation/auth-validation");
const router = Router();
console.log('blogRouter')
router.get("/", blogController.get_Blogs);
router.post("/create", blogController.create_post);
// router.post("/login", loginValidation(), authController.login_post);

module.exports = router;
