const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: String,
  age: Number,
  addres: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  email: String,
  phoneNo: String,
  dateOfBirth: String,
  photo: String,
  dog: [
    {
      type: Schema.Types.ObjectId,
      ref: "Dog",
    },
  ],
});

module.exports = mongoose.model("owner", ownerSchema);
