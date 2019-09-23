const router = require("express").Router();
const { check } = require("express-validator");
const validation = require("./validation");

const userController = require("./usersController");
router.post("/users/login", [
  check("email").custom(validation.isNotEmpty),
  check("password").custom(validation.isNotEmpty)
], (req, res) => {
  if (!validation.hasErrors(req, res))
    userController.login(req, res);
});

router.route("/users")
  .get(userController.getAllUsers)
  .post([
    check("email").isEmail(),
    check("password").isLength({ min: 8, max: 25 }).custom(validation.passwordConfirmation),
    check("confirm_password").custom(validation.isNotEmpty),
    check("first_name").isLength({ min: 2, max: 50 }),
    check("last_name").isLength({ min: 2, max: 50 })
  ], (req, res) => {
    if (!validation.hasErrors(req, res))
      userController.createUser(req, res);
});
router.route("/users/:userId")
  .get(userController.getUserById)
  .put([
    check("email").isEmail(),
    check("first_name").isLength({ min: 2, max: 50 }),
    check("last_name").isLength({ min: 2, max: 50 })
  ], (req, res) => {
    if (!validation.hasErrors(req, res))
      userController.updateUser(req, res);
  })
  .delete(userController.deleteUser);
router.put("/users/changePassword", [
  check("old_password").custom(validation.isNotEmpty),
  check("password").isLength({ min: 8, max: 20 }).custom(validation.passwordConfirmation),
  check("confirm_password").custom(validation.isNotEmpty)
], (req, res) => {
  if (!validation.hasErrors(req, res))
    userController.changePassword(req, res);
});
router.put("/users/:id/promote", userController.promoteEmployee);
router.get("/roles", userController.getAllRoles);

const teamsController = require("./teamsController");
router.post("/teams", [
  check("name").isLength({min: 1, max: 255 })
], (req, res) => {
  if (!validation.hasErrors(req, res))
    teamsController.create(req, res);
});
router.route("/teams/:id")
  .get(teamsController.getOne)
  .delete(teamsController.deleteTeam)
  .put([
    check("name").isLength({min: 1, max: 255 })
  ], (req, res) => {
    if (!validation.hasErrors(req, res))
      teamsController.update(req, res);
  });
router.post("/teams/:id/add/:userId", teamsController.addEmployee);
router.delete("/teams/:id/remove/:userId", teamsController.removeEmployee);

const workingTimesController = require("./workingTimesController");
router.put("/clocks", workingTimesController.clockInAndOut);

module.exports = router;
