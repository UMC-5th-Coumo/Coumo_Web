import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getMyPosts = createAsyncThunk(
  'post/getMyPosts',
  async ({ ownerId, pageId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/notice/${ownerId}/list/${pageId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getMyPosts;
