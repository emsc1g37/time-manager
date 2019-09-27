const router = require("express").Router();
const { check, query } = require("express-validator");
const validation = require("./validation");

const userController = require("./usersController");
router.post("/users/login", [
  check("email").exists(),
  check("password").exists()
], (req, res) => {
  if (!validation.hasErrors(req, res))
    userController.login(req, res);
});

router.route("/users")
  .get(userController.getAllUsers)
  .post([
    check("email").isEmail(),
    check("password").isLength({ min: 8, max: 25 }),
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
  check("old_password").exists(),
  check("password").isLength({ min: 8, max: 20 })
], (req, res) => {
  if (!validation.hasErrors(req, res))
    userController.changePassword(req, res);
});
router.put("/users/:id/promote", userController.promoteEmployee);
router.get("/roles", userController.getAllRoles);

const teamsController = require("./teamsController");
router.post("/teams", [
  check("name").isLength({min: 1, max: 255 }),
], (req, res) => {
  if (!validation.hasErrors(req, res))
    teamsController.create(req, res);
});
router.route("/teams/:teamId")
  .get(teamsController.getOne)
  .delete(teamsController.deleteTeam)
  .put([
    check("name").isLength({min: 1, max: 255 })
  ], (req, res) => {
    if (!validation.hasErrors(req, res))
      teamsController.update(req, res);
  });
router.post("/teams/:teamId/add/:userId", teamsController.addEmployee);
router.delete("/teams/:teamId/remove/:userId", teamsController.removeEmployee);

const workingTimesController = require("./workingTimesController");
router.get("/users/:userId/workingTimes", [
  query("from").isBefore(),
  query("to").not().isAfter()
], (req, res) => {
  if (!validation.hasErrors(req, res))
    workingTimesController.getAllBetween(req, res);
});
router.put("/clocks", workingTimesController.clockInAndOut);

const workPeriodsController = require("./workPeriodsController");
router.route("/teams/:teamId/workPeriods")
  .get([
    query("from").isBefore(),
    query("to").not().isAfter()
  ], (req, res) => {
    if (!validation.hasErrors(req, res))
      workPeriodsController.getAllForTeamBetween(req, res);
  })
  .post([
    check("user_id").isInt(),
    check("arrival").isRFC3339(),
    check("departure").isRFC3339()
  ], (req, res) => {
    if (!validation.hasErrors(req, res))
      workPeriods.create(req, res);
});
router.route("/teams/:teamId/workPeriods/:id")
  .put([
    check("arrival").isRFC3339(),
    check("departure").isRFC3339()
  ], (req, res) => {
    if (!validation.hasErrors(req, res))
      workPeriodsController.update(req, res);
  })
  .delete(workPeriodsController.deleteWorkPeriod);
router.get("/teams/:teamId/users/:userId/workPeriods", [
  query("from").isBefore(),
  query("to").not().isAfter()
], (req, res) => {
  if (!validation.hasErrors(req, res))
    workPeriodsController.getAllForUserBetween(req, res);
});

module.exports = router;
