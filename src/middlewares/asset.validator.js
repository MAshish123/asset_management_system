const { body, validationResult } = require("express-validator");

const validateAsset = [
  body("name")
    .notEmpty()
    .withMessage("Name is required.")
    .isString()
    .withMessage("Name must be a string."),

  body("type")
    .notEmpty()
    .withMessage("Type is required.")
    .isString()
    .withMessage("Type must be a string."),

  body("status")
    .optional()
    .isIn(["available", "in use", "maintenance", "retired"])
    .withMessage(
      "Status must be one of: available, in use, maintenance, or retired."
    ),

  body("purchaseDate")
    .optional()
    .isISO8601()
    .withMessage("Purchase date must be a valid ISO 8601 date."),

  body("serialNumber")
    .notEmpty()
    .withMessage("Serial number is required.")
    .isString()
    .withMessage("Serial number must be a string."),

  body("location")
    .notEmpty()
    .withMessage("Location is required.")
    .isString()
    .withMessage("Location must be a string."),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((err) => err.msg),
    });
  }
  next();
};

module.exports = {
  validateAsset,
  handleValidationErrors,
};
