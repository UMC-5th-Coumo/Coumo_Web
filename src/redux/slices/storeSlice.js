import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicInfo: {
    storeName: '',
    category: 'cafe',
    workingHours: {
      MONDAY: {
        day: 'MONDAY',
        startTime: '00:00',
        endTime: '00:00',
      },
      TUESDAY: {
        day: 'TUESDAY',
        startTime: '00:00',
        endTime: '00:00',
      },
      WEDNESDAY: {
        day: 'WEDNESDAY',
        startTime: '00:00',
        endTime: '00:00',
      },
      THURSDAY: {
        day: 'THURSDAY',
        startTime: '00:00',
        endTime: '00:00',
      },
      FRIDAY: {
        day: 'FRIDAY',
        startTime: '00:00',
        endTime: '00:00',
      },
      SATURDAY: {
        day: 'SATURDAY',
        startTime: '00:00',
        endTime: '00:00',
      },
      SUNDAY: {
        day: 'SUNDAY',
        startTime: '00:00',
        endTime: '00:00',
      },
    },
    number: '',
    address: '',
    addressDetail: '',
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
  reducers: {
    setBasicInfo: (state, action) => {
      state.storeName = action.payload.storeName;
      state.category = action.payload.category;
      state.workingHours = action.payload.workingHours;
      state.number = action.payload.number;
      state.address = action.payload.address;
      state.addressDetail = action.payload.addressDetail;
    },
  },
});

export const { setBasicInfo } = storeSlice.actions;

export default storeSlice.reducer;
