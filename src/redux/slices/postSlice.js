import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    postDummyData: [], // 글 목록 배열
    selectedPost: null, // 현재 선택된 글
  },
  reducers: {
    setPostDummyData: (state, action) => {
      state.postDummyData = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setPostDummyData, setSelectedPost } = postsSlice.actions;

export default postsSlice.reducer;
