const UserController = require("../controller/UserController");
const express = require("express");
const router = express.Router();

router.post("/login", UserController.login);
router.post("/signup", UserController.signup);

module.exports = router;
