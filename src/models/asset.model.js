const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    status: {
      type: String,
      enum: ["available", "in use", "maintenance", "retired"],
      default: "available",
    },
    purchaseDate: { type: Date, default: Date.now },
    serialNumber: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Asset", assetSchema);
