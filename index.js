const express = require("express");
const bodyParser = require("body-parser");
const postgres = require('./db/config');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
////////DATABASE///////
postgres.pgConnect();
//////////////////////s
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST, OPTION");
  next();
});

app.use("/api", require("./routes/api"));
// ------ Start web server ------

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("platform listening on port " + port); // eslint-disable-line
});
