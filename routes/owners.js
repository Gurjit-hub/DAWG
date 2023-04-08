const express = require("express");
const router = express.Router();

const Customer = require("../models/customer");
const Review = require("../models/review");
const Owner = require("../models/owner");
const Dog = require("../models/dog");

router.get("/:id", async (req, res) => {
  const owner1 = await Owner.findById(req.params.id);
  res.render("allcustomers/owners/info", { owner1 });
});

module.exports = router;
