import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import customerReducer from './slices/customerSlice';
import storeReducer from './slices/storeSlice';

const rootReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
  store: storeReducer,
});

export default rootReducer;
