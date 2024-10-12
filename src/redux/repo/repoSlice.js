import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repositories: [],
  loading: false,
  error: null,
  hasMoreRepos: true,
  totalReposFetch: 0,
  totalCount: 0,
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
        const { reposFetch, totalRepos } = action.payload;  
        state.repositories = [...state.repositories, ...reposFetch];  
        state.loading = false;
        state.error = null;
        state.totalReposFetch += reposFetch.length;  
        state.totalRepos = totalRepos;        
    
        // If totalRepos equals totalCount, no more repos to load
        state.hasMoreRepos = state.totalReposFetch < state.totalRepos;
    },
    fetchRepoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearRepos: (state) => {
        state.repositories = [];
        state.hasMoreRepos = true;
        state.totalReposFetch = 0;     
        state.totalRepos = 0; 
    }
  },
});

export const { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure, clearRepos } = repoSlice.actions;
export default repoSlice.reducer;
