export const categoryData = [
  {
    id: 'CAFE',
    label: '카페/디저트',
  },
  {
    id: 'RESTAURANT',
    label: '요식업',
  },
  {
    id: 'RETAIL',
    label: '리테일',
  },
  {
    id: 'BEAUTY',
    label: '뷰티/살롱',
  },
  {
    id: 'ACADEMY',
    label: '학원/클래스',
  },
  {
    id: 'ENTERTAINMENT',
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
    id: 'ALL',
    label: '전체 보기',
  },
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

// label(한글)값 tag(영어)에 따라 자동 지정
export const getLabelByTag = (tag) => {
  const category = writecategoryData.find((item) => item.id === tag);
  return category ? category.label : null;
};

export const getLabelByCategoryId = (tag) => {
  const category = categoryData.find((item) => item.id === tag);
  return category ? category.label : null;
};
