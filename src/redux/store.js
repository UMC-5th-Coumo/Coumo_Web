import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import sessionStorage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

// redux-persist
const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// redux-thunk 내장, redux-devtools 자동 연동
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// persistor
export const persistor = persistStore(store);
