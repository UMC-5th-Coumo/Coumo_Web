import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../api/axios';

const modifyStoreInfo = createAsyncThunk(
  'store/modifyStoreInfo',
  async (storeId, coords, { getState }) => {
    try {
      const {
        storeSlice: { info },
      } = getState();

      const storeData = {
        name: info.storeName,
        time: info.workingHours,
        telePhone: info.number.split('-').join(''),
        category: info.category,
        location: info.address,
        detailLocation: info.addressDetail,
        longitude: coords.longitude,
        latitude: coords.latitude,
      };

      // 기본정보 수정 api
      await authInstance
        .put(`/api/owner/store/${storeId}/basic`, storeData)
        .then((res) => {
          if (res.data.isSuccess) {
            console.log('Store data updated successfully!');
            // 팝업 예정
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error('Failed to update store data:', error);
    }
  }
);

export default modifyStoreInfo;
