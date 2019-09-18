const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK"
  });
});

const userController = require("./usersController");

router
  .route('/users')
  .get(userController.getUserByEmailAndUsername)
  .post(userController.createUser);
router
  .route('/users/all')
  .get(userController.getAllUsers)
router
  .route('/users/:userId')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);
router.put('/users/:id/promote', userController.promoteEmployee);
router.get('/roles', userController.getAllRoles);

const teamsController = require('./teamsController');
router.post('/teams', teamsController.create);
router
	.route('/teams/:id')
	.get(teamsController.getOne)
	.delete(teamsController.delete)
	.put(teamsController.update);
router.post('/teams/:id/add/:userId', teamsController.addEmployee)
router.delete('/teams/:id/remove/:userId', teamsController.removeEmployee)

module.exports = router;
