import { configureStore } from "@reduxjs/toolkit";
import jobs from "./slice/jobs"
import pagination from "./slice/pagination";

export const store = configureStore({
  reducer: {
    jobs,
    pagination
  }
})