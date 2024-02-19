import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../../api/axios';

const modifyStoreInfo = createAsyncThunk(
  'store/modifyStoreInfo',
  async ({ storeId, storeInfo }) => {
    console.log('storeData', storeInfo);
    try {
      // 기본정보 수정 api
      await authInstance
        .put(`/api/owner/store/${storeId}/basic`, storeInfo)
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
