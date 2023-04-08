const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
  customer: [
    {
      type: Schema.Types.ObjectId,
      ref: "customer",
    },
  ],
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: "owner",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
