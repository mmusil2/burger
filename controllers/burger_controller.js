var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

// Create the router for the app, and export the router at the end of your file.

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(data);
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger", function(req, res) {
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});


// Route to print all burgers NOT devoured
// router.get("/", function(req, res) {
//     burger.all(function(data) {
//         var notDevoured = [];
//         for (i=0; i < data.length; i++) {
//             if (data[i].devoured == 0) {
//                 notDevoured.push(data[i]);
//             };
//         };
//         var hbsObject = {
//             burgers: notDevoured
//         };
//         console.log(data);
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

module.exports = router;