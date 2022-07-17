import React from "react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../slices/workoutSlice";

export default ({ workout }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    
    if (response.ok) {
      console.log("handleDelete",json);
      dispatch(deleteWorkout(json));
    }

  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>delete</span>
    </div>
  );
};
