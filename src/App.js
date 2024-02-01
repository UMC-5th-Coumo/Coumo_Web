import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/common/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Neighborhood from './pages/Neighborhood';
import Coupon from './pages/Coupon';
import Customer from './pages/Customer';
import Login from './pages/Login';
import FindId from './pages/FindId';
import FindPw from './pages/FindPw';
import JoinOneStep from './pages/join/JoinOneStep';
import JoinTwoStep from './pages/join/JoinTwoStep';
import Congratulate from './pages/join/Congratulate';
import MyPage from './pages/MyPage';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AdminHeader from './components/common/AdminHeader';
import AdminVerticalHeader from './components/common/AdminVerticalHeader';

function App() {
  const { token } = useSelector((state) => state.user);
  return (
    <>
      <GlobalStyle />
      {token ? (
        <>
          <AdminHeader />
          <Container>
            <AdminVerticalHeader />
            <Wrapper>
              <Routes>
                <Route path='/shop/*' element={<Shop />} />
                <Route path='/neighborhood/*' element={<Neighborhood />} />
                <Route path='/coupon/*' element={<Coupon />} />
                <Route path='/customer/*' element={<Customer />} />
                <Route path='/mypage' element={<MyPage />} />
              </Routes>
            </Wrapper>
          </Container>
        </>
      ) : (
        <>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/join/one' element={<JoinOneStep />} />
            <Route path='/join/two' element={<JoinTwoStep />} />
            <Route path='/join/finish' element={<Congratulate />} />
            <Route path='/login' element={<Login />} />
            <Route path='/findId' element={<FindId />} />
            <Route path='/findPw' element={<FindPw />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const Wrapper = styled.div`
  width: calc(100vw - 250px);
`;
