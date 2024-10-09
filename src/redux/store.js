import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import repoReducer from './repo/repoSlice'
import  repoSaga  from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repo: repoReducer,
  },
  //middleware: [sagaMiddleware],
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(repoSaga);

export default store;
