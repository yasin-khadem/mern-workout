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
    deleteWorkout: (state,action) => {
        state.workouts = state.workouts.filter(w => w._id !== action.payload._id);
    }
  },
});

export const { setWorkouts, addWorkout , deleteWorkout} = workoutSlice.actions;

export default workoutSlice.reducer;
