const express = require("express");
const {
  Register,
  Login,
  getAllUsers,
  getSingleUser,
} = require("../Controllers/UserContoller");
const { DataValidation } = require("../MiddleWares/DataValidation");
const { AuthMiddleware } = require("../MiddleWares/AuthMiddleware");
const router = express.Router();

router.post("/register", DataValidation, Register);
router.post("/login", Login);
router.get("/", AuthMiddleware, getAllUsers);
router.get("/user", AuthMiddleware, getSingleUser);

module.exports = router;
