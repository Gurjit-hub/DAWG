const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
  color: String,
  gender: String,
  weight: Number,
  height: Number,
  description: String,
  available: String,
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: "Owner",
    },
  ],
});

module.exports = mongoose.model("dog", dogSchema);
