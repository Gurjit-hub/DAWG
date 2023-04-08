const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  addres: String,
  city: String,
  provience: String,
  country: String,
  email: String,
  BCID: String,
});

module.exports = mongoose.model("customer", customerSchema);
