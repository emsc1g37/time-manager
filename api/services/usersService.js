const shared = require("./shared");
const jwt = require("jsonwebtoken");

const secret = "secretImSecret";
const maxAge = "1209600s"; // 14 days in seconds

function changePassword(userId, oldPassword, newPassword) {
  return shared.execute("UPDATE users SET password = CRYPT($1, GEN_SALT('bf')) WHERE id = $2 AND password = CRYPT($3, password)",
    [newPassword, userId]
  );
}

function getUserById(userId) {
  return shared.execute(
    "SELECT u.id, u.email, u.first_name, u.last_name, u.role_id, r.label role_label FROM users u INNER JOIN roles r ON (u.role_id = r.id) WHERE u.id = $1",
    [userId]
  );
}

function getAllUsers() {
  return shared.execute("SELECT u.id, u.email, u.first_name, u.last_name, u.role_id, r.label role_label FROM users u INNER JOIN roles r ON (u.role_id = r.id)", []);
}

function createUser(email, password, firstName, lastName) {
  return shared.execute(
    "INSERT INTO users (email, password, first_name, last_name, role_id) VALUES ($1, CRYPT($2, GEN_SALT('bf')), $3, $4, 1) RETURNING id",
    [email, password, firstName, lastName]
  );
}

function updateUser(id, email, firstName, lastName) {
  return shared.execute("UPDATE users SET email = $1, first_name = $2, last_name = $3 WHERE id = $4",
    [email, firstName, lastName, id]
  );
}

function deleteUser(userId) {
  return shared.execute("DELETE FROM users WHERE id = $1", [userId]);
}

async function login(email, password) {
  const user = await shared.execute(
    "SELECT u.id, u.email, u.first_name, u.last_name, u.role_id, r.label role_label FROM users u INNER JOIN roles r ON (u.role_id = r.id) WHERE email LIKE LOWER ($1) AND password = CRYPT($2, password)",
    [email, password]
  );
  if (user.data.length == 0)
    return {error: "Invalid email or password."};
  else {
    const token = jwt.sign({ email: email, id: user.data[0].id, role: user.data[0].role_id }, secret, {
      expiresIn: maxAge
    });
    user.data[0].token = token;
    return user.data[0];
  }
}

function getAllRoles() {
  return shared.execute("SELECT * FROM roles");
}

function promoteEmployee(id) {
  return shared.execute("UPDATE users SET role_id = 2 WHERE id = $1", [id]);
}

module.exports = {
  changePassword,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  login,
  getAllRoles,
  promoteEmployee
};
