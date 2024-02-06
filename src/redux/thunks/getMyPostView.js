import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getMyPostView = createAsyncThunk(
  'post/getMyPostView',
  async ({ ownerId, noticeId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/notice/${ownerId}/detail/${noticeId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getMyPostView;
