import { createSlice } from '@reduxjs/toolkit';

const initialPostDummyData = [
  {
    id: 0,
    tag: 'new',
    label: '신메뉴/신상품',
    title: '팀메리 1월 신메뉴 출시',
    content:
      '2024년 갑진년을 맞이하여 팀메리가 신메뉴를 출시했습니다.\n이번에는 딸기와 초코로 색다른 맛을 표현해봤어요~\n달달한 거 좋아하시는 분들께 강추하는 메뉴입니다! :) 어쩌구 저쩌구 어쩌구 저쩌구',
    image: '',
  },
  {
    id: 1,
    tag: 'noshow',
    label: '노쇼 빈자리',
    title: '쿠모 네일 1/1 15시 30% 할인',
    content:
      '1월 1일 15시 예약 일정이 조금 전 취소 되었습니다.\n그래서 본 스케줄 한정 30% 파격 할인을 진행합니다!\n관심 있으셨던 분들은 예약 후 방문하셔서 저렴한 가격으로 예쁜 네일 받아가세요!',
    image: '',
  },
  {
    id: 2,
    tag: 'event',
    label: '이벤트',
    title: '설날 기념 1+1 이벤트 (2/9~2/12)',
    content:
      '다들 1월 한 달은 잘 보내셨나요? 곧 2월 설날이 다가오네요!\n소중한 분들과 모여 행복한 연휴 보내시라고 저희 XX카페에서 이벤트를 준비했습니다! 아메리카노(R) 메뉴 한정 1+1 이벤트를 진행하니 많이 방문해주세요:)',
    image: '',
  },
  {
    id: 3,
    tag: 'new',
    label: '신메뉴/신상품',
    title: '팀메리 1월 신메뉴 출시',
    content:
      '2024년 갑진년을 맞이하여 팀메리가 신메뉴를 출시했습니다.\n이번에는 딸기와 초코로 색다른 맛을 표현해봤어요~\n달달한 거 좋아하시는 분들께 강추하는 메뉴입니다! :) 어쩌구 저쩌구 어쩌구 저쩌구',
    image: '',
  },
];

const postSlice = createSlice({
  name: 'post',
  initialState: {
    postDummyData: initialPostDummyData, // 글 목록 배열
    selectedPost: null, // 현재 선택된 글
    category: '', // 카테고리 필터
  },
  reducers: {
    setPostDummyData: (state, action) => {
      state.postDummyData = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setPostDummyData, setSelectedPost, setCategory } =
  postSlice.actions;

export default postSlice.reducer;
