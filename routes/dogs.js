const express = require("express");
const router = express.Router();

const Customer = require("../models/customer");
const Review = require("../models/review");
const Owner = require("../models/owner");
const Dog = require("../models/dog");

router.get("/new", (req, res) => {
  res.render("allcustomers/dogs/newdog");
});

router.post("/", async (req, res) => {
  const dog = new Dog(req.body.dog);
  if (dog) {
    await dog.save();
    res.redirect(`/dogs/${dog._id}`);
  } else {
    res.send("please select the option");
  }

  // console.log(type);
  // res.send(req.body);
});

router.get("/:id", async (req, res) => {
  const dog1 = await Dog.findById(req.params.id);
  res.render("allcustomers/dogs/doginfo", { dog1 });
});

module.exports = router;
