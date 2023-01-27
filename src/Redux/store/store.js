import { configureStore } from "@reduxjs/toolkit";
import jobs from "../actions/jobs";

export const store = configureStore({
  reducer: {
    jobs,
  }
})