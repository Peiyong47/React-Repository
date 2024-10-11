import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repositories: [],
  loading: false,
  error: null,
  hasMoreRepos: true,
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
      state.repositories = [...state.repositories, ...action.payload];
      state.loading = false;
      state.error = null;
      state.hasMoreRepos = action.payload.length > 0;
    },
    fetchRepoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearRepos: (state) => {
        state.repositories = [];
        state.hasMoreRepos = true;

    }
  },
});


export const { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure, clearRepos } = repoSlice.actions;
export default repoSlice.reducer;
