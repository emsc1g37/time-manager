const shared = require("./shared");

function addEmployee(teamId, employeeId) {
  return shared.execute(
    "INSERT INTO member_of (team_id, employee_id) VALUES ($1, $2)",
    [teamId, employeeId]
  );
}

function create(teamName, managerId) {
  return shared.execute(
    "INSERT INTO teams (name, manager_id) VALUES ($1, $2) RETURNING id",
    [teamName, managerId]
  );
}

function deleteTeam(teamId) {
  return shared.execute("DELETE FROM teams WHERE id = $1", teamId);
}

function getOne(teamId) {
  return shared.execute("SELECT t.id, t.name, t.manager_id, u.first_name manager_first_name, u.last_name manager_last_name FROM teams t INNER JOIN users u ON (t.manager_id = u.id) WHERE t.id = $1", [teamId]);
}

function getAllForUser(userId) {
  return shared.execute(
    "SELECT t.id, t.name, t.manager_id, u.first_name manager_first_name, u.last_name manager_last_name FROM teams t " +
    "INNER JOIN member_of m ON (t.id = m.team_id) " +
    "INNER JOIN users u ON (t.manager_id = u.id) " +
    "WHERE m.user_id = $1",
    [userId]
  );
}

function getAllManagedBy(managerId) {
  return shared.execute("SELECT * FROM teams WHERE manager_id = $1", [
    managerId
  ]);
}

function removeEmployee(teamId, employeeId) {
  return shared.execute(
    "DELETE FROM member_of WHERE team_id = $1 AND employee_id = $2",
    [teamId, employeeId]
  );
}

function update(teamId, name) {
  return shared.execute("UPDATE teams SET name = $1 WHERE id = $2", [
    name,
    teamId
  ]);
}

module.exports = {
  addEmployee,
  create,
  deleteTeam,
  getOne,
  getAllForUser,
  getAllManagedBy,
  removeEmployee,
  update,
};
