import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  data: [],
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateData: (state,action) => {
      state.data = action.payload;
    },

  },
});

export const { updateLoadState, updateData } = moviesSlice.actions;

export default moviesSlice.reducer;
