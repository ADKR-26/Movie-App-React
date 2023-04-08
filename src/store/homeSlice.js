import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {}
  },
  reducers: {
    getApiConfiguration: ( state, action ) => {
        state.url = action.payload;
        // console.log(state.url);
    },
    getGenres: ( state, action ) => {
        state.url = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;