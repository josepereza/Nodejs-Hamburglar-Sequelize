// var express = require("express");
// var router = express.Router();


// Import the model (cat.js) to use its database functions.
// var burger = require("../models/burger.js");

// Requiring our Todo model
var db = require("../models");
// burgers is now being grabbed by db

console.log("hello 1");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.
  console.log("hello 2");
  app.get("/", function(req, res) {
    console.log("hello 3");
    //db.burger.all(function(data) {
    db.Burger.findAll({})
    .then(function(data) {
      //console.log("this is data: " + data);
      //console.log(data);
      //console.log(data.burger_name);
      var hbsObject = {
        Burger: data
      };
      console.log("hello 4 ------------");
      //console.log(hbsObject);
      //res.json(data);
      res.render("index", hbsObject);
    });
  });


  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    })
    .then(function(data) {
      res.redirect("/");
    });
  });


  app.put("/:id", function(req, res) {
    //var condition = "id = " + req.params.id;
    //console.log("condition", condition);
    db.Burger.update(
      {
        devoured: req.body.devoured
      },
      {
        where: {
          id: req.params.id
        }
      })
    .then(function() {
      res.redirect("/");
    });
  });


  app.delete("/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect("/");
    });
  });

};
// Export routes for server.js to use.
// module.exports = router;
