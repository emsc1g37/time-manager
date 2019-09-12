const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
////////DATABASE///////

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
  console.log("Comma platform listening on port " + port); // eslint-disable-line
});
