const teamsService = require('../services/teamsService');

async function addEmployee(req, res) {
	await teamsService.addEmployee(req.params.id, req.params.userId);
}

async function create(req, res) {
	await teamsService.create(req.body.managerId, req.body.name);
}

async function delete(req, res) {
	await teamsService.delete(req.params.id);
}

async function getAllManagedBy(req, res) {
	await teamsService.getAllManagedBy(req.params.id);
}

async function removeEmployee(req, res) {
	await teamsService.removeEmployee(req.params.id, req.params.userId)
}

async function update(req, res) {
	await teamsService.update(req.params.id, req.body.name);
}

module.export = {
	create,
	getAllManagedBy,
};