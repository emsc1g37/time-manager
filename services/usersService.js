const shared = require("./shared");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);

const secret = "secretImSecret";
const maxAge = "1209600s"; // 14 days in seconds

function getUserById(userId) {
  return shared.execute(
    "SELECT u.id, u.email, u.first_name, u.last_name, u.role_id r.label role_label FROM users u INNER JOIN roles r ON (u.role_id = r.id) WHERE id = $1",
    [userId]
  );
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
    "SELECT u.id, u.email, u.first_name, u.last_name, u.role_id, r.label role_label FROM users u INNER JOIN roles r ON (u.role_id = r.id) WHERE email LIKE LOWER($1) " +
      "AND username LIKE LOWER($2)",
    [email, username]
  );
}

async function login(email, password) {
  const user = await shared.execute(
    "SELECT u.id, u.email, u.first_name, u.last_name, u.role_id, r.label role_label FROM users u INNER JOIN roles r ON (u.role_id = r.id) WHERE email LIKE LOWER ($1) AND password = CRYPT($2, password)",
    [email, password]
  );
  if (user.data == null)
    return {eror: "No Match"};
  const token = jwt.sign({ email: email, id: user.data[0].id, role: user.data[0].role_id }, secret, {
    expiresIn: maxAge
  });
  user.data[0].token = token;
  return user.data[0];
}

function getAllRoles() {
  return shared.execute("SELECT * FROM roles");
}

function promoteEmployee(id) {
  return shared.execute("UPDATE users SET (role_id = 2) WHERE id = $1", [id]);
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserByEmailAndUsername,
  login,
  getAllRoles,
  promoteEmployee
};
