const { validationResult } = require("express-validator");

function hasErrors(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() }).end();
    return true;
  }
  return false;
}

module.exports = {
  hasErrors,
};