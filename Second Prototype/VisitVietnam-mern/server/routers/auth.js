const express = require("express");
const {
  register,
  login,
  getCurrentUser
} = require("../controllers/auth.js");
const {checkCurrentUser} = require('../middlewares/checkCurrentUser.js');

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", checkCurrentUser, getCurrentUser);

module.exports = router;
