import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

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
  console.log(workouts)

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
