import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../api/axios';

const getStoreInfo = createAsyncThunk('store/getStoreInfo', async (storeId) => {
  try {
    const res = await authInstance.get(`/api/owner/store/${storeId}/basic`);

    if (res.data.isSuccess) {
      const data = res.data.result;
      const result = {
        storeName: data.name,
        number: data.telePhone,
        address: data.location,
        addressDetail: data.detailLocation,
        category: data.category,
        workingHours: {},
      };

      data.time.forEach((timeData) => {
        result.workingHours[timeData.day] = timeData;
      });
      return result;
    }
  } catch (err) {
    throw err;
  }
});

export default getStoreInfo;
