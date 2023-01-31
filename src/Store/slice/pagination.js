import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  postPerPage: 5,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: function (state, action) {
      state.currentPage = action.payload
    }
  }
})

export const { setCurrentPage } = paginationSlice.actions
export default paginationSlice.reducer