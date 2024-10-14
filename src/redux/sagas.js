import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure } from './repo/repoSlice';
import toast from 'react-hot-toast';

function* fetchRepo(action) {
    const { page = 1, perPage = 10, searchTerm = '' } = action.payload || {};     
    let reposFetch = [];
    let hasMoreRepos = true;
    let totalRepos = 0;

    try {
        const response = yield call(axios.get, `https://api.github.com/search/repositories?q=${searchTerm}+org:reactjs&per_page=${perPage}&page=${page}&sort=updated&order=desc`);
        if (response.data.items.length > 0) {
            reposFetch = response.data.items;
            totalRepos = response.data.total_count;
        }
        else {
            hasMoreRepos = false;
        }
        yield put(fetchRepoSuccess({reposFetch, totalRepos}));
    } catch (error) {
        console.error('error');
        toast.error('An error has occurred. Please try again later.');
        yield put(fetchRepoFailure(error.message));
    }
}

export default function* repoSaga() {
    yield takeLatest(fetchRepoRequest, fetchRepo);
}