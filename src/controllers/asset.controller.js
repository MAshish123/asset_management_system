const Asset = require("../models/asset.model");

//create asset
exports.createAsset = async (req, res) => {
  try {
    const asset = new Asset(req.body);
    const savedAsset = await asset.save();
    res.status(201).json(savedAsset);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get all aaset
exports.getAllAsset = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update asset
exports.updateAsset = async (req, res) => {
  try {
    const updatedAsset = await Asset.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAsset)
      return res.status(404).json({ message: "Asset not found" });
    res.status(200).json(updatedAsset);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Asset by ID
exports.getAssetById = async (req, res) => {
    try {
      const asset = await Asset.findById(req.params.id);
      if (!asset) return res.status(404).json({ message: 'Asset not found' });
      res.json(asset);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

// Delete Asset
exports.deleteAsset = async (req, res) => {
  try {
    const deletedAsset = await Asset.findByIdAndDelete(req.params.id);
    if (!deletedAsset)
      return res.status(404).json({ message: "Asset not found" });
    res.status(200).json({ message: "Asset deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
