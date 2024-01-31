import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import customerReducer from './slices/customerSlice';

const rootReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
});

export default rootReducer;
