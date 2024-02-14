import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicInfo: {
    storeName: '',
    category: 'cafe',
    workingHours: [],
    number: '',
    location: '',
  },
  storeInfo: {
    storeImages: [],
    description: '',
    menus: [],
  },
  status: {
    loading: true,
    error: null,
  },
};

const storeSlice = createSlice({
  name: 'store',
  initialState: initialState,
  reducers: {},
});

export default storeSlice.reducer;
