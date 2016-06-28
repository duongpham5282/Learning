var express = require('express');
var router = express.Router();
var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}} {{last}}!", {
    first: "Duong",
    last: "Pham"
});
console.log(result);
/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;