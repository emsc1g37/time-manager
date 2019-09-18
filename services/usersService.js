const db = require("../db/config");
const shared = require("./shared");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);

const secret = "secretImSecret";
const maxAge = "1209600s"; // 14 days in seconds

function getUserById(userId) {
  return shared.execute("SELECT * FROM users WHERE id = $1", [userId]);
}

function getAllUsers() {
  return shared.execute("SELECT * FROM users", []);
}

function createUser(email, username, password) {
  const cryptedPassword = bcryptjs.hashSync(password, salt);
  return shared.execute(
    "INSERT INTO users (email, username, password) VALUES ($1, $2, $3)",
    [email, username, cryptedPassword]
  );
}

function updateUser(email, username) {
  return shared.execute("UPDATE users SET email = $1, username = $2", [
    email,
    username
  ]);
}

function deleteUser(userId) {
  return shared.execute("DELETE FROM users WHERE id = $1", [userId]);
}

function getUserByEmailAndUsername(email, username) {
  return shared.execute(
    "SELECT * FROM users WHERE email LIKE LOWER($1) " +
      "AND username LIKE LOWER($2)",
    [email, username]
  );
}

async function login(email, password) {
  const user = await shared.execute(
    "SELECT * FROM users WHERE email LIKE LOWER ($1) ",
    [email]
  );
  const hash = user.data[0].password;
  const passwordFromPlatform = password;
  const compareResult = await bcryptjs.compare(passwordFromPlatform, hash);
  if (compareResult === false) {
    return "No Match";
  }
  const token = jwt.sign({ user: email }, secret, {
    expiresIn: maxAge
  });
  user.data[0].password = undefined;
  user.data[0].token = token;
  return user;
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserByEmailAndUsername,
  login
};
