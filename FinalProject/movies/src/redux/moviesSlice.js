import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataLoad: false,
  data: [],
  totalPages: 20,
  activePage: 1,
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
      state.dataLoad = action.payload.dataLoad;
    },

    updateData: (state,action) => {
      state.data = action.payload.results;
      state.activePage = action.payload.page;
    },

  },
});

export const { updateLoadState, updateData } = moviesSlice.actions;

export default moviesSlice.reducer;
