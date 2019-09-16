const userService = require('../services/usersService');

async function getAllUsers(req, res) {
    let promise = await userService.getAllUsers();
    console.log('USERS: ' + promise);
    res.json({ status: 'OK', user: promise.foundUser });
}

async function getUserByEmailAndUsername(req, res) {
    let promise = await userService.getUserByEmailAndUsername(req.query.email, req.query.username);
    res.json({ status: 'OK', user: promise.foundUser });
}

async function getUserById(req, res) {
    let promise = await userService.getUserById(req.params.userId);
    res.json({ status: 'OK', user: promise.foundUser });
}

async function createUser(req, res) {
    let promise = await userService.createUser(req.body.email, req.body.username);
    console.log(promise)
    res.json({ status: 'OK', user: promise });
}

async function updateUser(req, res) {
    let promise = await userService.updateUser(req.body.email, req.body.username);
    res.json({ status: 'OK', user: promise.updatedUser });
}

async function deleteUser(req, res) {
    let promise = await userService.deleteUser(req.params.userId);
    res.json({ status: 'OK', user: promise.deletedUser });
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers,
    getUserByEmailAndUsername
};
