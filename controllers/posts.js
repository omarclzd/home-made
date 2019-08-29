const User = require("../models/user");
const Post = require("../models/post");

module.exports = {
  index,
  new: newPost
};

function newPost(req, res) {
  User.findById(req.params.id, (err, user) => {
    res.render("posts/new", { user: req.user });
  });
}

function index(req, res) {
  User.findById(req.params.id, (err, post) => {
    res.render("posts/index", {
      user: req.user
    });
  });
}
