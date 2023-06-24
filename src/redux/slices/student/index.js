import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentName: "",
  studentAge: "",
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.studentName = action.payload;
    },
    addAge: (state, action) => {
      state.studentAge = action.payload;
    },
    resetStore: (state) => {
      state.studentName = "";
      state.studentAge = "";
    },
  },
});

export const { addName, addAge, resetStore } = studentSlice.actions;

export default studentSlice.reducer;
