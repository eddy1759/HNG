const { body, validationResult } = require('express-validator');

const validatePerson = [
  body('name').isString().withMessage('Name must be a string'),
];

module.exports = validatePerson;