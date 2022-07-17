import React, { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useSelector, useDispatch } from 'react-redux'
import { setWorkouts } from '../slices/workoutSlice'

function Home() {
  const { workouts } = useSelector(state => state.workout)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/workouts");
      const body = await response.json();
      if (response.ok) {
        dispatch(setWorkouts(body));
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts.length > 0 && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
export default Home;
