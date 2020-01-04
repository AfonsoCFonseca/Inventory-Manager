var express = require("express");
var path = require("path");
var app = express();

var port = process.env.PORT || 8080;

app.use("/dist", express.static(path.join(__dirname, "/dist")));
app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));
app.use("/vendor", express.static(path.join(__dirname, "/vendor")));
app.use("/src", express.static(path.join(__dirname, "/src")));
app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/homepage.html");
});

app.listen(port, function() {
  console.log(__dirname);
  console.log("Simple Server Running on port 8080");
});
