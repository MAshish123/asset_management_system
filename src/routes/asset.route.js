const express = require("express");
const router = express.Router();
const {
  createAsset,
  getAllAsset,
  deleteAsset,
  getAssetById,
  updateAsset
} = require("../controllers/asset.controller");
const {
  validateAsset,
  handleValidationErrors,
} = require("../middlewares/asset.validator");

// Create Asset
router.post(
  "/createasset",
  validateAsset,
  handleValidationErrors,
  createAsset
);
router.get("/getallasset", getAllAsset);
router.get("/:id", getAssetById);
router.patch("/updateasset/:id", updateAsset);
router.delete("/deleasset/:id", deleteAsset);

module.exports = router;
