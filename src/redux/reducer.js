import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import customerReducer from './slices/customerSlice';
import postReducer from './slices/postSlice';
import storeReducer from './slices/storeSlice';

const rootReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
  post: postReducer,
  store: storeReducer,
});

export default rootReducer;
