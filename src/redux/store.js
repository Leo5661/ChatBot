import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "./slices/student";

const store = configureStore({
  reducer: {
    student: studentSlice,
  },
});

export default store;
