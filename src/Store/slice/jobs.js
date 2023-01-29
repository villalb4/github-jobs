import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs : [],
  isLoading: true,
}

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    startLoadingJobs: (state, action) => {
      state.isLoading = true;
    },
    setJobs: (state, action) => {
      state.allJobs = action.payload
      state.isLoading = false;
    }
  }
})

export const { setJobs, startLoadingJobs } = jobsSlice.actions
export default jobsSlice.reducer
