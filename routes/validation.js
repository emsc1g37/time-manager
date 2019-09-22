const { validationResult } = require("express-validator");

function hasErrors(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() }).end();
    return true;
  }
  return false;
}

function isNotEmpty(value, {req, loc, path}) {
  if (value === undefined || value === null || value === "")
    throw new Error("This field is required.");
  else
    return value;
}

function passwordConfirmation(value, {req, loc, path}) {
  if (value !== req.body.confirm_password)
    throw new Error("Passwords don't match.");
  else
    return value;
}

module.exports = {
  hasErrors,
  isNotEmpty,
  passwordConfirmation
};