const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({msg:"get all workouts"});
})

router.get("/:id", (req, res) => {
    res.json({msg:"get workout by id"});
})

router.post("/", (req, res) => {
    res.json({msg:"create a new workout"});
});

router.delete("/:id", (req, res) => {
    res.json({msg:"delete a workout"});
});

router.delete("/:id", (req, res) => {
    res.json({msg:"delete a workout"});
});

router.patch("/:id", (req, res) => {
    res.json({msg:"update a workout"});
});

module.exports = router;