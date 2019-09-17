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


module.exports = router;
