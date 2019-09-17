const shared = require('./shared');

function addEmployee(teamId, employeeId) {
	shared.execute('insert into member_of (team_id, employee_id) values ($1, $2)', [teamId, employeeId])
}

function create(teamName, managerId) {
	shared.execute('insert into teams (name, manager_id) values ($1, $2 $3)', [teamName, managerId])
}

module.exports = {
	addEmployee,
	create,
	deleteEmployee,
	deleteOne,
	getOne,
	getAllForManager
};