const shared = require('./shared');

function addEmployee(teamId, employeeId) {
	return shared.execute('insert into member_of (team_id, employee_id) values ($1, $2)', [teamId, employeeId])
}

function create(teamName, managerId) {
	return shared.execute('insert into teams (name, manager_id) values ($1, $2)', [teamName, managerId])
}

function delete(teamId) {
	return shared.execute('delete from teams where id = $1', teamId);
}

function getOne(teamId) {
	return shared.execute("select * from teams where id = $1", teamId);
}

function getAllForUser(userId) {
	return shared.execute("select t.id, t.name from teams t inner join member_of m on (t.id = m.team_id) where m.user_id = $1", [userId]);
}

function getAllManagedBy(managerId) {
	return shared.execute("select * from teams where manager_id = $1", [managerId]);
}

function removeEmployee(teamId, employeeId) {
	return shared.execute('delete from member_of where team_id = $1 and employee_id = $2', [teamId, employeeId])
}

function update(teamId, name) {
	return shared.execute("update teams set (name = $1) where id = $2", [name, teamId]);
}

module.exports = {
	addEmployee,
	create,
	delete,
	getOne,
	getAllForUser,
	getAllManagedBy,
	removeEmployee,
	update
};