import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure } from './repo/repoSlice';

function* fetchRepo() {
    try {
        const response = yield call(axios.get, 'https://api.github.com/orgs/reactjs/repos?per_page=100')
        yield put(fetchRepoSuccess(response.data));
    } catch (error) {
        yield put(fetchRepoFailure(error.message));
    }
}

export default function* repoSaga() {
    yield takeLatest(fetchRepoRequest, fetchRepo);
}