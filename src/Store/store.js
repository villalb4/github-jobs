import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "./api/jobs";
import jobs from "./slice/jobs"

export const store = configureStore({
  reducer: {
    jobs,

    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(jobsApi.middleware)
})