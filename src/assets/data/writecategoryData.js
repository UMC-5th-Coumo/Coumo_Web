export const writecategoryData = [
  {
    id: 'new',
    label: '신메뉴/신상품',
  },
  {
    id: 'noshow',
    label: '노쇼 빈자리',
  },
  {
    id: 'event',
    label: '이벤트',
  },
];

// label(한글)값 tag(영어)에 따라 자동 지정
export const getLabelByTag = (tag) => {
  const category = writecategoryData.find((item) => item.id === tag);
  return category ? category.label : null;
};
