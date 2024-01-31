import { createSlice } from '@reduxjs/toolkit';
import getCustomers from '../thunks/getCustomers';

const initialState = {
  count: {
    total: 0,
    regular: 0,
    new: 0,
  },
  customers: [],
  regularCustomers: [],
  newCustomers: [],
  status: {
    loading: false,
    error: null,
  },
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state, action) => {
        state.status.loading = true;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        // 전체 고객
        state.customers = action.payload.customers.customers;
        state.count.total = action.payload.customers.cnt;

        // 단골
        state.regularCustomers = action.payload.regularCustomers.customers;
        state.count.regular = action.payload.regularCustomers.cnt;

        // 신규
        state.newCustomers = action.payload.newCustomers.customers;
        state.count.new = action.payload.newCustomers.cnt;

        state.status.loading = false;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.error;
      });
  },
});

export default customerSlice.reducer;
