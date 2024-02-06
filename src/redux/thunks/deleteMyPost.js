import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteMyPost = createAsyncThunk(
  'post/deleteMyPost',
  async ({ ownerId, noticeId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `/api/notice/${ownerId}/delete/${noticeId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default deleteMyPost;
