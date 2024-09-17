const User = require("../models/user.model");
const Asset = require("../models/asset.model");

// Create User
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("assets");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Assign Asset to User
exports.assignAssetToUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const asset = await Asset.findById(req.params.assetId);
    if (!user || !asset)
      return res.status(404).json({ message: "User or Asset not found" });

    asset.assignedTo = user._id;
    await asset.save();

    user.assets.push(asset._id);
    await user.save();

    res.json({ message: "Asset assigned to user", user, asset });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Unassign Asset from User
exports.unassignAssetToUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const asset = await Asset.findById(req.params.assetId);
    if (!user || !asset)
      return res.status(404).json({ message: "User or Asset not found" });

    asset.assignedTo = null;
    await asset.save();

    user.assets = user.assets.filter(
      (id) => id.toString() !== asset._id.toString()
    );
    await user.save();

    res.json({ message: "Asset unassigned from user", user, asset });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
