const userService = require("../services/usersService");

async function getAllUsers(req, res) {
  const resultsFromService = await userService.getAllUsers();
  console.log(resultsFromService);
  if (resultsFromService.error)
    res.status(500).json(resultsFromStatus).end();
  else
    res.json(resultsFromService.data).end();
}

async function getAllRoles(req, res) {
  const result = await userService.getAllRoles();
  if (result.data)
    res.json(result.data).end();
  else
    res.status(500).json(result).end();
}

async function getUserById(req, res) {
  const resultsFromService = await userService.getUserById(req.params.userId);
  if (resultsFromService.error)
    res.status(500).json(resultsFromService).end();
  else
    res.json(resultsFromService.data[0]).end();
}

async function createUser(req, res) {
  const resultsFromService = await userService.createUser(
    req.body.email,
    req.body.password,
    req.body.firstName,
    req.body.lastName
  );
  if (resultsFromService.error)
    res.json(resultsFromService).end();
  else
    res.status(201).json(resultsFromService.data[0]).end();
}

async function updateUser(req, res) {
  const resultsFromService = await userService.updateUser(
    req.user.id,
    req.body.email,
    req.body.first_name,
    req.body.last_name
  );
  if (resultsFromService.error)
    res.status(500).json(resultsFromService).end();
  else
    res.json(resultsFromService.data).end();
}

async function promoteUser(req, res) {
  if (req.user.role != 3)
    res.status(403).end();
  else {
    const result = await userService.getUserById(req.params.id);
    if (result.error)
      res.status(500).json(result).end();
    else if (result.data.length == 0)
      res.status(404).end();
    else if (result.data.role_id != 1)
      res.status(400).json({error: "Only employees can be promoted to managers."}).end();
    else {
      const result = await userService.promoteEmployee(req.params.id);
      if (result.error)
        res.status(500).json(result).end();
      else
        res.status(204).end();
    }
  }
}

async function deleteUser(req, res) {
  if (req.user.id != req.params.id && req.user.role != 3)
    res.status(403).end();
  else {
    const resultsFromService = await userService.deleteUser(req.params.userId);
    if (resultsFromService.error)
      res.status(500).json(resultsFromService).end();
    else
      res.status(204).end();
  }
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
  getAllRoles,
  login,
  promoteUser
};
