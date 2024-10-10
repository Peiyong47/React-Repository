import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure } from './repo/repoSlice';

function* fetchRepo() {
    let allRepos = [];
    let page = 1;
    let hasMoreRepos = true;

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const config = {
        headers: {
            Authorization: `token ${token}`,
        },
    }
    
    try {
        while(hasMoreRepos) {
            const response = yield call(axios.get, `https://api.github.com/orgs/reactjs/repos?per_page=100&page=${page}`, config);
            if (response.data.length > 0) {
                allRepos = [...allRepos, ...response.data];
                page++;
            } else {
                hasMoreRepos = false;
            }
        }
        yield put(fetchRepoSuccess(allRepos));
    } catch (error) {
        yield put(fetchRepoFailure(error.message));
    }
}

export default function* repoSaga() {
    yield takeLatest(fetchRepoRequest, fetchRepo);
}