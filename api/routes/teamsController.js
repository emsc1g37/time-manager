const teamsService = require("../services/teamsService");

async function addEmployee(req, res) {
  if (await ensureOwnership(req, res)) {
    const result = await teamsService.addEmployee(req.params.id, req.params.userId);
    if (result.error)
      res.status(500).json(result).end();
    else
      res.status(200).end();
  }
}

async function create(req, res) {
  if (req.user.role != 2)
    res.status(403).json({error: "Only managers can create teams."}).end();
  else {
    const result = await teamsService.create(req.body.name, req.user.id);
    if (result.error)
      res.status(500).json(result).end();
    else {
      res.status(201).json({
        id: result.data[0].id,
        name: req.body.name,
        managerId: req.user.id
      }).end();
    }
  }
}

async function deleteTeam(req, res) {
  if (await ensureOwnership(req, res)) {
    const result = await teamsService.deleteTeam(req.params.id);
    if (result.error)
      res.status(500).json(result).end();
    else
      res.status(201).json(result.data[0]).end();
  }
}

async function ensureOwnership(req, res) {
  const result = await teamsService.getOne(req.params.teamId);
  if (result.error)
    res.status(500).json(result).end();
  else if (result.data.length == 0)
    res.status(404).end();
  else if (result.data[0].managerId != req.user.id)
    res.status(403).json({error: "You are not in charge of this team."}).end();
  else
    return true;
  return false;
}

async function getAllManagedBy(req, res) {
  await teamsService.getAllManagedBy(req.params.id);
}

async function getOne(req, res) {
  const result = await teamsService.getOne(req.params.id);
  if (result.error)
    res.status(500).json(result).end();
  else if (result.data.length == 0)
    res.status(404).end()
  else
    res.json(result.data).end();
}

async function removeEmployee(req, res) {
  await teamsService.removeEmployee(req.params.id, req.params.userId);
}

async function update(req, res) {
  await teamsService.update(req.params.id, req.body.name);
}

module.exports = {
  addEmployee,
  create,
  deleteTeam,
  ensureOwnership,
  getOne,
  getAllManagedBy,
  removeEmployee,
  update
};