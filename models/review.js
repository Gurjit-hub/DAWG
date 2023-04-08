const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: String,
  comment: String,
});

module.exports = mongoose.model("review", reviewSchema);
