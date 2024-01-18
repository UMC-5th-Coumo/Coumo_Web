import React, { useState } from 'react';
import styled from 'styled-components';
import { writingTabs } from '../assets/data/writingTabs';
import TabBar from '../components/common/TabBar';
import { COLORS } from '../styles/theme';
import MyPosts from './neighborhood/MyPosts';

const Neighborhood = () => {
  const [selected, setSelected] = useState(writingTabs[0].key);
  return (
    <Container>
      <TabBar
        tabs={writingTabs}
        selected={selected}
        setSelected={setSelected}
      />
      <Content>{selected === 'myPosts' && <MyPosts />}</Content>
    </Container>
  );
};

export default Neighborhood;

const Container = styled.div`
  box-sizing: border-box;
  padding: 70px 120px;
`;

const Content = styled.div`
  width: 100%;
  color: ${COLORS.tab_gray};
  font-size: 16px;
  padding: 70px 0px;
  box-sizing: border-box;
  font-weight: 500;
`;
