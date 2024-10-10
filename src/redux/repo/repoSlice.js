import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repositories: [],
  loading: false,
  error: null,
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    fetchRepoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRepoSuccess: (state, action) => {
      state.repositories = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRepoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

console.log('state:', initialState);

export const { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure } = repoSlice.actions;
export default repoSlice.reducer;
