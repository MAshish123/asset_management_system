const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["admin", "employee"], default: "employee" },
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Asset" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
