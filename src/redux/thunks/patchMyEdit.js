import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const patchMyEdit = createAsyncThunk(
  'post/atchMyEdit',
  async ({ ownerId, noticeId, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `/api/notice/${ownerId}/update/${noticeId}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default patchMyEdit;
