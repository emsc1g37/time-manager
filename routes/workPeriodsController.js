const teamsService = require("../services/teamsService");
const workPeriodsService = require("../services/workPeriodsService");

async function create(req, res) {
  if (await teamsService.ensureOwnership(req, res)) {
    const result = await workPeriodsService.create(req.params.id, req.body.user_id, req.body.arrival, req.body.departure);
    if (result.error)
      res.status(500).json(result).end();
    else {
      res.status(201).json({
        team_id: req.params.id,
        user_id: req.body.id,
        arrival: req.body.arrival,
        departure: req.body.departure
      }).end();
    }
  }
}

async function delete(req, res) {
  if (teamsController.ensureOwnership(req, res)) {
    const result = await workPeriodsService.delete(req.params.teamId, req.params.id);
    if (result.error)
      res.status(500).json(result).end();
  else
    res.status(200).end();
  }
}

async function getAllForUserBetween(req, res) {
  const result = await workPeriodsService.getAllBetween(req.params.id, req.params.userId,
    new Date(req.query.from),
    new Date(new Date().setDate(new Date(req.query.to).getDate() + 1))
  );
  if (result.error)
    res.status(500).json(result).end();
  else
    res.json(result.data);
}

async function update(req, res) {
  if (await teamsService.ensureOwnership(req, res)) {
    const result = await workPeriodsService.update(req.params.id, req.body.user_id, req.body.arrival, req.body.departure);
    if (result.error)
      res.status(500).json(result).end();
    else {
      res.status(200).json({
        team_id: req.params.id,
        user_id: req.body.id,
        arrival: req.body.arrival,
        departure: req.body.departure
      }).end();
    }
  }
}

module.exports = {
  create,
  delete,
  getAllForUserBetween,
  update
};