import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure, clearRepos } from './repo/repoSlice';

function* fetchRepo(action) {
    console.log('action in sagas', action);
    const { page = 1, perPage = 10 } = action.payload || {};     
    let allRepos = [];
    let hasMoreRepos = true;

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const config = {
        headers: {
            Authorization: `token ${token}`,
        },
    }
    
    // Fetch all repos in one api call
    // let page = 1;
    // let allRepos = [];
    // let hasMoreRepos = true;
    // try {
    //     while(hasMoreRepos) {
    //         const response = yield call(axios.get, `https://api.github.com/orgs/reactjs/repos?per_page=100&page=${page}&sort=updated`, config);            
    //         if (response.data.length > 0) {
    //             allRepos = [...allRepos, ...response.data];
    //             page++;
    //         } else {
    //             hasMoreRepos = false;
    //         }
    //     }
    //     console.log('allRepos', allRepos);
    //     yield put(fetchRepoSuccess(allRepos));
    // } catch (error) {
    //     yield put(fetchRepoFailure(error.message));
    // }

    try {
        const response = yield call(axios.get, `https://api.github.com/search/repositories?q=+org:reactjs&per_page=${perPage}&page=${page}&sort=updated&order=desc`, config);
        console.log('response in sagas', response);
        if (response.data.items.length > 0) {
            allRepos = response.data.items;
        }
        else {
            hasMoreRepos = false;
        }
        console.log('allRepos in sagas', allRepos);
        yield put(fetchRepoSuccess(allRepos));
    } catch (error) {
        yield put(fetchRepoFailure(error.message));
    }
}

export default function* repoSaga() {
    yield takeLatest(fetchRepoRequest, fetchRepo);
}