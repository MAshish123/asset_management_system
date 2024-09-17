const { body, validationResult } = require('express-validator');

const validateUser = [
  body('name')
    .notEmpty()
    .withMessage('Name is required.')
    .isString()
    .withMessage('Name must be a string.'),

  body('email')
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Email must be valid.'),

  body('role')
    .optional()
    .isIn(['admin', 'employee'])
    .withMessage('Role must be either admin or employee.'),

  body('assets')
    .optional()
    .isArray()
    .withMessage('Assets must be an array of ObjectIds.')
    .custom((value) => {
      for (let id of value) {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
          throw new Error('Each asset must be a valid MongoDB ObjectId.');
        }
      }
      return true;
    }),
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
  validateUser,
  handleValidationErrors
};
