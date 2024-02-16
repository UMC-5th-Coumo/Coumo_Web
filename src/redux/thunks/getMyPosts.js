import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { defaultInstance } from '../../api/axios';

const getMyPosts = createAsyncThunk(
  'post/getMyPosts',
  async ({ ownerId, pageId }, { rejectWithValue }) => {
    try {
      const response = await defaultInstance.get(`
        /api/notice/1/list?pageId=1`);
      if (response.data.isSuccess) {
        console.log('성공', response.data);
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getMyPosts;
