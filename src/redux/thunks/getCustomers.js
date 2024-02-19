import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../api/axios';

const getCustomers = createAsyncThunk(
  'customer/getCustomers',
  async (storeId) => {
    try {
      // 전체 고객
      const allRes = await authInstance.get(
        `/api/statistics/${storeId}/customer`
      );
      const all = allRes.data.result;

      // 신규 고객
      const newRes = await authInstance.get(
        `/api/statistics/${storeId}/customer/new`
      );
      const newCus = newRes.data.result;

      // 신규 고객
      const regularRes = await authInstance.get(
        `/api/statistics/${storeId}/customer/regular`
      );
      const regular = regularRes.data.result;

      return {
        customers: all,
        regularCustomers: regular,
        newCustomers: newCus,
      };
    } catch (err) {
      throw err;
    }
  }
);

export default getCustomers;
