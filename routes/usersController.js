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

async function getAllRoles(req, res) {
  res.json(await userService.getAllRoles()).end();
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
    req.body.username,
    req.body.password
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

async function promoteUser(req, res) {
  const result = await userService.getUserById(req.params.id);
  if (!result.success) {
    res
      .status(500)
      .json({ error: result.error })
      .end();
  } else if (result.data.role_id != 1) res.status(400).end();
  else {
    const result = await userService.promoteEmployee(req.params.id);
    res.status(result.success ? 200 : 500).end();
  }
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

async function login(req, res) {
  console.log("login");
  const resultsFromService = await userService.login(
    req.body.email,
    req.body.password
  );
  console.log(resultsFromService);
  if (resultsFromService.error) {
    res.status(400);
    res.json(resultsFromService).end();
  }
  res.status(200);
  res.json(resultsFromService).end();
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserByEmailAndUsername,
  login,
  promoteUser
};
