import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  id: '',
  pw: '',
  ownerId: '',
  storeId: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.id = action.payload.id;
      state.pw = action.payload.pw;
      state.ownerId = action.payload.ownerId;
      state.storeId = action.payload.storeId;
      state.token = action.payload.token;
    },
  },
});

// actions
export const { setUser, clearUser } = userSlice.actions;

// reducer export
export default userSlice.reducer;
