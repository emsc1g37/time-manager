const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK"
  });
});

const employees = require("./employeesController");

router
  .route("/employees/")
//   .post(employees.createOne)
  .get(employees.list);
router
  .route("/employees/:id")
  .get(employees.readOne)
//   .put(employees.updateOne)
//   .delete(employees.deeteOne);

const managers = require("./managersController");

router
  .route("/managers/")
//   .post(managers.create)
  .get(managers.list);
router
  .route("/managers/:id")
  .get(managers.readOne)
//   .put(managers.updateOne)
//   .delete(managers.deleteOne);


module.exports = router;
