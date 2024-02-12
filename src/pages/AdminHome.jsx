import React from 'react';
import styled from 'styled-components';
import FormPopUp from '../components/admin/formPopUp/FormPopUp';

function AdminHome() {
  return (
    <Container>
      <FormPopUp />
    </Container>
  );
}

export default AdminHome;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
`;
