const userService = require("../services/usersService");

async function getAllUsers(req, res) {
  const resultsFromService = await userService.getAllUsers();
  console.log(resultsFromService);

  console.log(resultsFromService.status);
  if (resultsFromService.error) {
    res.status(resultsFromService.status);
    res.json(resultsFromService).end();
  } else {
    res.json(resultsFromService.data);
    res.status(resultsFromService.status).end();
  }
}

async function getUserByEmailAndUsername(req, res) {
  if (req.query.email && req.query.username) {
    const resultsFromService = await userService.getUserByEmailAndUsername(
      req.query.email,
      req.query.username
    );
    if (resultsFromService.error) {
      res.status(resultsFromService.status);
      res.json(resultsFromService).end();
    }
    res.status(resultsFromService.status);
    res.json(resultsFromService.data).end();
  }
  res.status(400);
  res.json("Arguments missing").end();
}

async function getUserById(req, res) {
  const resultsFromService = await userService.getUserById(req.params.userId);
  if (resultsFromService.status === 500) {
    res.status(resultsFromService.status);
    res.json(resultsFromService).end();
  }
  res.status(resultsFromService.status);
  res.json(resultsFromService.data).end();
}

async function createUser(req, res) {
  const resultsFromService = await userService.createUser(
    req.body.email,
    req.body.username
  );
  if (resultsFromService.error) {
    res.status(resultsFromService.status);
    res.json(resultsFromService).end();
  }
  res.status(resultsFromService.status);
  res.json(resultsFromService.data).end();
}

async function updateUser(req, res) {
  const resultsFromService = await userService.updateUser(
    req.body.email,
    req.body.username
  );
  if (resultsFromService.error) {
    res.status(resultsFromService.status);
    res.json(resultsFromService).end();
  }
  res.status(resultsFromService.status);
  res.json(resultsFromService.data).end();
}

async function deleteUser(req, res) {
  const resultsFromService = await userService.deleteUser(req.params.userId);
  if (resultsFromService.error) {
    res.status(resultsFromService.status);
    res.json(resultsFromService).end();
  }
  res.status(resultsFromService.status);
  res.json(resultsFromService.data).end();
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserByEmailAndUsername
};
