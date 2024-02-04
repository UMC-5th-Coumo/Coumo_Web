import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import customerReducer from './slices/customerSlice';
import postReducer from './slices/postSlice';

const rootReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
  post: postReducer,
});

export default rootReducer;
