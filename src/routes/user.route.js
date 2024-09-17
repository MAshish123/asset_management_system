const express = require("express");
const {
  getAllUsers,
  assignAssetToUser,
  unassignAssetToUser,
  createUser,
} = require("../controllers/user.controller");
const {
  validateUser,
  handleValidationErrors,
} = require("../middlewares/user.validator");
const router = express.Router();

router.post("/createuser", validateUser, handleValidationErrors, createUser);
router.get("/getalluser", getAllUsers);
router.patch("/:userId/assign/:assetId", assignAssetToUser);
router.patch("/:userId/unassign/:assetId", unassignAssetToUser);

module.exports = router;
