import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    setWorkouts: (state,action) => {
      state.workouts = action.payload;
    },
    addWorkout: (state,action) => {
        state.workouts = [...state.workouts, action.payload];
    },
  },
});

export const { setWorkouts, addWorkout } = workoutSlice.actions;

export default workoutSlice.reducer;
