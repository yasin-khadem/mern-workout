const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

router.get("/", (req, res) => {
  res.json({ msg: "get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "get workout by id" });
});

router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "update a workout" });
});

module.exports = router;
