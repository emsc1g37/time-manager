const shared = require("./shared");

function addEmployee(teamId, userId) {
  return shared.execute(
    "INSERT INTO member_of (team_id, user_id) VALUES ($1, $2)",
    [teamId, userId]
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

function getAllMembersFor(teamId) {
  return shared.execute("SELECT u.id, u.email, u.first_name, u.last_name, u.role_id, r.label role_label FROM users u " +
    "INNER JOIN roles r ON (u.role_id = r.id) " +
    "INNER JOIN member_of m ON (u.id = m.user_id) " +
    "WHERE m.team_id = $1",
    [teamId]
  );
}

function getAllManagedBy(managerId) {
  return shared.execute("SELECT * FROM teams WHERE manager_id = $1", [
    managerId
  ]);
}

function removeEmployee(teamId, userId) {
  return shared.execute(
    "DELETE FROM member_of WHERE team_id = $1 AND user_id = $2",
    [teamId, userId]
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
  getAllMembersFor,
  removeEmployee,
  update,
};
