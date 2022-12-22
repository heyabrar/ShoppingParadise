const express = require("express");
const { regUser, loginUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", regUser);
router.post("/login", loginUser);

module.exports = router;
