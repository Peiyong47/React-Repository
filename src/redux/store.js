import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import repoReducer from './repo/repoSlice'
import repoSaga  from './sagas';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    repo: repoReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(repoSaga);

export const persistor = persistStore(store);

export default store;
