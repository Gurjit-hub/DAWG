const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Customer = require("./models/customer");
const Review = require("./models/review");
const Owner = require("./models/owner");
const Dog = require("./models/dog");
const User = require("./models/user");

const customers = require("./routes/customers");
const owners = require("./routes/owners");
const dogs = require("./routes/dogs");
// const reviews = require("./routes/reviews");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/DAWG");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/customers", customers);
app.use("/owners", owners);
app.use("/dogs", dogs);
// app.use("/reviews", reviews);

app.get("/", (req, res) => {
  res.render("allcustomers/home");
});

app.get("/login", (req, res) => {
  res.render("allcustomers/login");
});

app.get("/new", (req, res) => {
  res.render("allcustomers/new");
});

app.post("/register", async (req, res) => {
  const { type } = req.body;
  const user1 = new User(req.body.customer);

  if (type == "owner") {
    const owner1 = new Owner(req.body.customer);
    user1.owner.push(owner1);
    await owner1.save();
    await user1.save();
    res.redirect(`/owners/${owner1._id}`);
  } else if (type == "customer") {
    const customer1 = new Customer(req.body.customer);
    user1.customer.push(customer1);
    await customer1.save();
    await user1.save();
    res.redirect(`/customers/${customer1._id}`);
  } else {
    res.send("please select the option");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user1 = await User.findOne({ name: username });
  if (user1) {
    if (password == user1.password) {
      if (user1.owner) {
        const id = user1.owner.toString();
        const owner1 = await Owner.findById(id);
        const ownerId = owner1._id.toString();
        res.redirect(`/owners/${ownerId}`);
      } else if (user1.customer) {
        const id = user1.customer.toString();
        const customer1 = await Customer.findById(id);
        const customerId = customer1._id.toString();
        res.redirect(`/customers/${customerId}`);
      }
    } else {
      res.send("Please enter the correct password");
    }
  } else {
    res.send("Please enter the correct Username");
  }
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
