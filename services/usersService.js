const shared = require("./shared");

function getUserById(userId) {
  return shared.execute("SELECT u.id, u.email, u.first_name, u.last_name, u.role_id r.label role_label FROM users u INNER JOIN roles r ON (u.role_id = r.id) WHERE id = $1", [userId]);
}

function getAllUsers() {
  return shared.execute("SELECT u.id, u.email, u.first_name, u.last_name, u.role_id r.label role_label FROM userss u INNER JOIN roles r ON (u.role_id = roles.id)", []);
}

function createUser(email, username) {
  return shared.execute("INSERT INTO users (email, password, first_name, last_name, role_id) VALUES ($1, $2, $3, $4, 1)", [
    email,
    password,
    first_name,
    last_name
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
    "SELECT u.id, u.email, u.first_name, u.last_name, u.role_id, r.label role_label FROM users u INNER JOIN roles r ON (u.role_id = r.id) WHERE email LIKE LOWER($1) " +
      "AND username LIKE LOWER($2)",
    [email, username]
  );
}

function getAllRoles() {
  return shared.execute('SELECT * FROM roles');
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserByEmailAndUsername,
  getAllRoles
};
