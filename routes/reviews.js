const express = require("express");
const router = express.Router();

const Customer = require("../models/customer");
const Review = require("../models/review");
const Owner = require("../models/owner");
const Dog = require("../models/dog");

router.get("/", async (req, res) => {
  const customers = await Customer.find({});
  res.render("allcustomers/index", { customers });
});

router.get("/:id", async (req, res) => {
  const customer1 = await Customer.findById(req.params.id);
  res.render("allcustomers/show", { customer1 });
});

module.exports = router;
