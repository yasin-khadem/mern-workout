import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/workouts");
      const body = await response.json();
      if (response.ok) {
        setWorkouts(body);
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
