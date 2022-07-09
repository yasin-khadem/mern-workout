require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method, req.url);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

//connect to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => console.error(err));
