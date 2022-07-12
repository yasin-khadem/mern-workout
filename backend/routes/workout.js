const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "update a workout" });
});

module.exports = router;
