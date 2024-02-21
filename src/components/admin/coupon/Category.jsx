import React from 'react';
import styled from 'styled-components';
import RadioBtn from '../../common/RadioBtn';

const Category = ({
  data,
  category,
  setCategory,
  setPageId,
  columns,
  dropWidth,
  gap = 12,
  titleSize = 'normal',
}) => {
  const onChange = (id) => {
    setCategory(id);
    if (setPageId) {
      setPageId(1);
    }
  };
  return (
    <Container>
      <Title $titleSize={titleSize}>카테고리</Title>
      <Wrapper $columns={columns} $gap={gap}>
        {data.map((item) => {
          return (
            <RadioBtn
              key={item.id}
              id={item.id}
              label={item.label}
              name='category'
              selected={category}
              onChange={onChange}
              dropWidth={dropWidth}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme, $titleSize }) =>
    $titleSize === 'normal' ? theme.fontSize.lg : theme.fontSize.base};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  width: 100%;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  gap: ${({ $gap }) => $gap}px;
`;
