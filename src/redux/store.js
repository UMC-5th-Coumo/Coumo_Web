import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

// redux-thunk 내장, redux-devtools 자동 연동
export const store = configureStore({ reducer: rootReducer });
