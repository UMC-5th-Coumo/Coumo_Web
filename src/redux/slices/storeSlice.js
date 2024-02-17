import { createSlice } from '@reduxjs/toolkit';
import getStoreInfo from '../thunks/getStoreInfo';
import modifyStoreInfo from '../thunks/modifyStoreInfo';

const initialState = {
  info: {
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
  status: {
    loading: true,
    error: null,
  },
};

const storeSlice = createSlice({
  name: 'store',
  initialState: initialState,
  reducers: {
    setStoreName: (state, action) => {
      state.storeName = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setWorkingHours: (state, action) => {
      state.workingHours = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAddressDetail: (state, action) => {
      state.addressDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStoreInfo.pending, (state, action) => {
        state.status.loading = true;
      })
      .addCase(getStoreInfo.fulfilled, (state, action) => {
        state.storeName = action.payload.storeName;
        state.category = action.payload.category;
        state.workingHours = action.payload.workingHours;
        state.number = action.payload.number;
        state.address = action.payload.address;
        state.addressDetail = action.payload.addressDetail;
        state.status.loading = false;
      })
      .addCase(getStoreInfo.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.error;
      })
      .addCase(modifyStoreInfo.pending, (state, action) => {
        state.status.loading = true;
      })
      .addCase(modifyStoreInfo.fulfilled, (state, action) => {
        state.status.loading = false;
      })
      .addCase(modifyStoreInfo.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.error;
      });
  },
});

export const {
  setBasicInfo,
  setStoreName,
  setCategory,
  setNumber,
  setWorkingHours,
  setAddress,
  setAddressDetail,
} = storeSlice.actions;

export default storeSlice.reducer;
