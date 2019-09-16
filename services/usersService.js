const db = require('../db/config');

function getAllUsers() {
    return new Promise((resolve, reject) => {
        let findUserSql = 'SELECT * FROM users';

        const findUserQuery = {
            text: findUserSql,
            values: []
        };
        db.query(findUserQuery, '', (err, results) => {
            if (err) {
                console.error(err.stack);
                reject({ status: 'KO', error: err });
            } else {
                resolve({ status: 'OK', foundUser: results.rows });
            }
        });
    }).catch(error => {
        console.error('??? -> ' + error);
    });
}

function getUserByEmailAndUsername(email, username) {
    return new Promise((resolve, reject) => {
        let findUserSql = 'SELECT * FROM users WHERE email LIKE LOWER($1) ' +
            'AND username LIKE LOWER($2)';

        const findUserQuery = {
            text: findUserSql,
            values: [email, username]
        };
        db.query(findUserQuery, '', (err, results) => {
            if (err) {
                console.error(err.stack);
                reject({ status: 'KO', error: err });
            } else {
                resolve({ status: 'OK', foundUser: results.rows });
            }
        });
    });
}

function getUserById(userId) {
    return new Promise((resolve, reject) => {
        let findUserSql = 'SELECT * FROM users WHERE id = $1';
        console.log(userId)
        const findUserQuery = {
            text: findUserSql,
            values: [userId]
        };
        db.query(findUserQuery, '', (err, results) => {
            if (err) {
                console.error(err.stack);
                reject({ status: 'KO', error: err });
            } else {
                resolve({ status: 'OK', foundUser: results.rows });
            }
        });
    });
}

function createUser(email, username) {
    return new Promise((resolve, reject) => {
        let createUserSql = 'INSERT INTO users (email, username) VALUES ($1, $2)';

        const createUserQuery = {
            text: createUserSql,
            values: [email, username]
        };

        if (err) {
            console.error(err.stack);
            reject({ status: 'KO', error: err });
        } else {
            console.log(results.rows)
            resolve({ status: 'OK', createdUser: { email, username } });
        }

    })
        .catch(error => {
            console.error('??? ')

        })
}
function updateUser(email, username) {
    return new Promise((resolve, reject) => {
        let updateUserSql = 'UPDATE users SET email = $1, username = $2';

        const updateUserQuery = {
            text: updateUserSql,
            values: [email, username]
        };
        db.query(updateUserQuery, '', (err, results) => {
            if (err) {
                console.error(err.stack);
                reject({ status: 'KO', error: err });
            } else {
                resolve({ status: 'OK', updatedUser: results.rows });
            }
        });
    });
}

function deleteUser(userId) {
    return new Promise((resolve, reject) => {
        let deleteUserSql = 'DELETE FROM users WHERE id = $1';

        const deleteUserQuery = {
            text: deleteUserSql,
            values: [userId]
        };
        db.query(deleteUserQuery, '', (err, results) => {
            if (err) {
                console.error(err.stack);
                reject({ status: 'KO', error: err });
            } else {
                resolve({ status: 'OK', deletedUser: results });
            }
        });
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
