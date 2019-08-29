var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema(
  {
    title: String,
    desc: String,

    user: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);
