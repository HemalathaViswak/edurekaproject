const express = require("express");
const router = express.Router();
const Items = require("../../model/Items");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  Items.find().then((items) => res.json(items));
});

router.post("/addItem", (req, res) => {
  const newItem = new Items({
    name: req.body.name,
  });

  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

router.delete("/deleteItem/:id", (req, res) => {
  Items.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(400).json({ success: false }));
});
module.exports = router;
