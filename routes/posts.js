var express = require("express");
var router = express.Router();
var postsCtrl = require("../controllers/posts");

router.get("/", postsCtrl.index);
router.get("/new", postsCtrl.new);

module.exports = router;
