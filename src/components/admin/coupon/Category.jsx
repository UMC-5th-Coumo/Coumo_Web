import React from 'react';
import styled from 'styled-components';
import RadioBtn from '../../common/RadioBtn';

const Category = ({ data, category, setCategory, columns }) => {
  const onChange = (id) => {
    setCategory(id);
  };
  return (
    <Container>
      <Title>카테고리</Title>
      <Wrapper columns={columns}>
        {data.map((item) => {
          return (
            <RadioBtn
              key={item.id}
              id={item.id}
              label={item.label}
              name='category'
              selected={category}
              onChange={onChange}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 12px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  width: 100%;
  margin: 0;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  gap: 12px;
`;
