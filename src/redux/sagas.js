import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure } from './repo/repoSlice';

function* fetchRepo(action) {
    const { page = 1, searchTerm = '' } = action.payload || {};     
    let reposFetch = [];
    let totalRepos = 0;

    try {
        const response = yield call(axios.get, `https://api.github.com/search/repositories?q=${searchTerm}+org:reactjs&per_page=10&page=${page}&sort=updated&order=desc`);
        if (response.data.items.length > 0) {
            reposFetch = response.data.items;
            totalRepos = response.data.total_count;
        }
        yield put(fetchRepoSuccess({reposFetch, totalRepos}));
    } catch (error) {
        yield put(fetchRepoFailure(error.message));
    }
}

export default function* repoSaga() {
    yield takeLatest(fetchRepoRequest, fetchRepo);
}