import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs : []
}

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.allJobs = action.payload;
    }
  }
})

export const { setJobs } = jobsSlice.actions
export default jobsSlice.reducer
