const express = require("express");
const {
  register,
  login,
  searchUser,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/search", authMiddleware, searchUser);

module.exports = router;
