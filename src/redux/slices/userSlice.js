import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  id: '',
  pw: '',
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
      state.token = action.payload.token;
    },
  },
});

// actions
export const { setUser } = userSlice.actions;

// reducer export
export default userSlice.reducer;