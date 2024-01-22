import React from 'react';
import styled from 'styled-components';
import MonthPicker from '../../components/admin/customer/MonthPicker';

const MonthlyReport = () => {
  return (
    <Container>
      <Header>
        <MonthPicker />
      </Header>
    </Container>
  );
};

export default MonthlyReport;

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
