const User = require("../models/user");

module.exports = {
  index
};

// const index = (req, res) => {
//   User.findById(req.params.id, (err, post) => {
//     res.render("posts/index", {
//       user: req.user
//     });
//   });
// };

function index(req, res) {
  User.findById(req.params.id, (err, post) => {
    res.render("posts/index", {
      user: req.user
    });
  });
}
