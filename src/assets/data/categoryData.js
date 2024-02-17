export const categoryData = [
  {
    id: 'cafe',
    label: '카페/디저트',
  },
  {
    id: 'restaurant',
    label: '요식업',
  },
  {
    id: 'retail',
    label: '리테일',
  },
  {
    id: 'beauty',
    label: '뷰티/살롱',
  },
  {
    id: 'academy',
    label: '학원/클래스',
  },
  {
    id: 'entertainment',
    label: '오락/스포츠',
  },
];

export const writecategoryData = [
  {
    id: 'NEW_PRODUCT',
    label: '신메뉴/신상품',
  },
  {
    id: 'NO_SHOW',
    label: '노쇼 빈자리',
  },
  {
    id: 'EVENT',
    label: '이벤트',
  },
];

export const postCategoryData = [
  {
    id: 'all',
    label: '전체 보기',
  },
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
