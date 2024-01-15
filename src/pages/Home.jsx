import React from 'react';
import Banner from '../components/home/Banner';
import TitleChip from '../components/home/TitleChip';
import styled from 'styled-components';
import PlanBox from '../components/home/PlanBox';

const Home = () => {
  return (
    <Container>
      <Banner />
      <ServiceBox>
        <TitleChip title='매장관리' />
        <PlanBox title='정기결제' price='월 39,000' />
      </ServiceBox>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const ServiceBox = styled.div`
  width: 100%;
  display: flex;
`;
