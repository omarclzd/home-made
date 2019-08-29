const User = require("../models/user");
const Post = require("../models/post");

module.exports = {
  index,
  new: newPost,
  create
};

function newPost(req, res) {
  User.findById(req.params.id, (err, user) => {
    res.render("posts/new", { user: req.user });
  });
}

function index(req, res) {
  User.findById(req.params.id, (err, post) => {
    Post.find({}, (err, post) => {
      res.render("posts/index", {
        user: req.user,

        post
      });
    });
  });
}

function create(req, res) {
  User.findById(req.session.passport.user, (err, user) => {
    var post = new Post(req.body);
    post.user.push(user);
    post.save(function(err) {
      if (err) return res.redirect("/posts/new");
      console.log(post);
      res.redirect("/posts");
    });
  });
}
