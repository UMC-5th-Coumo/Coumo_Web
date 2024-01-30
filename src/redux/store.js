import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// redux-persist
const persistConfig = {
  key: 'root',
  storage: storage,
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
