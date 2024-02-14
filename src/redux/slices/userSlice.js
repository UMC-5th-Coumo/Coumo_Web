import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  id: '',
  pw: '',
  ownerId: '',
  storeId: '',
  token: '',
  createdAt: '',
  write: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.pw = action.payload.pw;
      state.ownerId = action.payload.ownerId;
      state.storeId = action.payload.storeId;
      state.token = action.payload.token;
      state.createdAt = action.payload.createdAt;
      state.write = action.payload.write;
    },
  },
});

// actions
export const { setUser, clearUser } = userSlice.actions;

// reducer export
export default userSlice.reducer;
