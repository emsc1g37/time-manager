const shared = require("./shared");

function create(teamId, userId, arrival, departure) {
  return shared.execute("INSERT INTO work_periods (team_id, user_id, arrival, departure) VALUES ($1, $2, $3, $4)",
    [teamId, userId, arrival, departure]
  );
}

function deleteWorkPeriod(teamId, id) {
  return shared.execute("DELETE FROM work_periods WHERE team_id = $1 AND id = $2",
    [teamId, id]
  );
}

function getAllForTeamBetween(teamId, from, to) {
  return shared.execute(
    "SELECT w.team_id, w.id, w.user_id, u.first_name u.last_name, arrival, departure FROM work_periods " +
    "INNER JOIN member_of m ON (w.user_id = m.user_id) " +
    "INNER JOIN users u ON (m.user_id = u.id) " +
    "WHERE w.team_id = $1 AND arrival >= $3 AND departure <= $4",
    [teamId, from, to]
  );
}

function getAllForUserBetween(teamId, userId, from, to) {
  return shared.execute("SELECT * FROM work_periods WHERE team_id = $1 AND user_id = $2 AND arrival >= $3 AND departure <= $4",
    [teamId, userId, from, to]
  );
}

function update(teamId, id, arrival, departure) {
  return shared.execute("UPDATE work_periods SET (arrival = $1, departure = $2) WHERE team_id = $3 AND id = $4",
    [teamId, id, arrival, departure]
  );
}

module.exports = {
  create,
  deleteWorkPeriod,
  getAllForTeamBetween,
  getAllForUserBetween,
  update
};