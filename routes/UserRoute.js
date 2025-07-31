const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/create", createUser);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;
