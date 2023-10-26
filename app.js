require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//statics files
app.use(express.static("public"));

// handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", function (req, res) {
  res.render("home", {
    name: "Cristhian",
    title: "Nodejs Course",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    name: "Cristhian",
    title: "Nodejs Course",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    name: "Cristhian",
    title: "Nodejs Course",
  });
});

app.listen(port);
