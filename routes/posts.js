var express = require("express");
var router = express.Router();
var postsCtrl = require("../controllers/posts");

router.get("/", postsCtrl.index);
router.get("/profile", postsCtrl.profile);
router.get("/new", postsCtrl.new);
router.post("/", postsCtrl.create);

module.exports = router;
