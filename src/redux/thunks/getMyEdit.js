import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getMyEdit = createAsyncThunk(
  'post/getMyEdit',
  async ({ ownerId, noticeId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/notice/${ownerId}/detail/${noticeId}`
      );

      // const response = {
      //   isSuccess: true,
      //   code: 'COMMON200',
      //   message: '성공입니다.',
      //   result: {
      //     noticeType: '1',
      //     title: '쿠모',
      //     noticeContent: '안녕',
      //     image: '',
      //   },
      // };
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getMyEdit;
