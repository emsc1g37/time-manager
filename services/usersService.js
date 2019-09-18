const db = require("../db/config");
const shared = require("./shared");

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE id = $1";
    shared
      .execute(sql, [userId])
      .then(results => {
        console.log(results);
        resolve(results);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  }).catch(error => {
    return error;
  });
}

function getAllUsers() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users";
    shared
      .execute(sql, [])
      .then(results => {
        console.log(results);
        resolve(results);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  }).catch(error => {
    return error;
  });
}

function createUser(email, username) {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO users (email, username) VALUES ($1, $2)";
    shared
      .execute(sql, [email, username])
      .then(results => {
        console.log(results);
        resolve(results);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  }).catch(error => {
    return error;
  });
}

function updateUser(email, username) {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE users SET email = $1, username = $2";
    shared
      .execute(sql, [email, username])
      .then(results => {
        console.log(results);
        resolve(results);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  }).catch(error => {
    return error;
  });
}

function deleteUser(userId) {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM users WHERE id = $1";
    shared
      .execute(sql, [userId])
      .then(results => {
        console.log(results);
        resolve(results);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  }).catch(error => {
    return error;
  });
}

function getUserByEmailAndUsername(email, username) {
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT * FROM users WHERE email LIKE LOWER($1) " +
      "AND username LIKE LOWER($2)";
    shared
      .execute(sql, [email, username])
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  }).catch(error => {
    console.log(error);
    return error;
  });
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserByEmailAndUsername
};
