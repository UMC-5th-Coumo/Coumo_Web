import React from 'react';
import styled from 'styled-components';
import RadioBtn from '../../common/RadioBtn';
import { COLORS } from '../../../styles/theme';

const Category = ({ data, category, setCategory, containerWidth }) => {
  const onChange = (id) => {
    setCategory(id);
  };
  return (
    <Container width={containerWidth}>
      <Title>카테고리</Title>
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
    </Container>
  );
};

export default Category;

const Container = styled.div`
  width: ${(props) => props.width || '400px'};
  flex-wrap: wrap;
  display: flex;
  gap: 16px;
`;

const Title = styled.h2`
  color: ${COLORS.coumo_purple};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  width: 100%;
  margin: 0;
`;
