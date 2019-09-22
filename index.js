const express = require("express");
const bodyParser = require("body-parser");
const postgres = require("./db/config");
const expressJwt = require("express-jwt");
const path = require("path");
const pathToRegexp = require("path-to-regexp");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public/dist/")); 
app.get('/', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './public/dist/') });
});
////////SECU///////////
const unprotected = [{url: "/api/users/login", methods: "POST"}, {url: "/api/users/", methods: "POST"}];
const secret = "secretImSecret";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressJwt({ secret }).unless({ path: unprotected }));
////////DATABASE///////
postgres.pgConnect();
//////////////////////s
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST, OPTION");
  next();
});

app.use("/api", require("./routes/api"));
// ------ Start web server ------

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log("platform listening on port " + port); // eslint-disable-line
});
