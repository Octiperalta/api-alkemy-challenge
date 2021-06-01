const { Router } = require("express");
const { login, signup } = require("../controllers/auth");
const {
  postLoginRequestValitdations,
  postSignUpRequestValitdations,
} = require("../middlewares/auth");
const router = Router();

//* 1) ROUTE, 2) VALIDATOR, 3) CONTROLLER
router.post("/login", postLoginRequestValitdations, login);
router.post("/signup", postSignUpRequestValitdations, signup);

module.exports = router;
