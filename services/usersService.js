const db = require("../db/config");
const shared = require("./shared");

function getUserById(userId) {
  return shared.execute("SELECT * FROM users WHERE id = $1", [userId]);
}

function getAllUsers() {
  return shared.execute("SELECT * FROM userss", []);
}

function createUser(email, username) {
  return shared.execute("INSERT INTO users (email, username) VALUES ($1, $2)", [
    email,
    username
  ]);
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

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserByEmailAndUsername
};
