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
import JoinOneStep from './pages/join/JoinOneStep';
import JoinTwoStep from './pages/join/JoinTwoStep';
import Congratulate from './pages/join/Congratulate';
import MyPage from './pages/MyPage';
import FindId from './pages/find/FindId';
import FindPw from './pages/find/FindPw';
import FoundId from './pages/find/FoundId';
import RePw from './pages/find/RePw';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AdminHeader from './components/common/AdminHeader';
import AdminVerticalHeader from './components/common/AdminVerticalHeader';
import UIServiceList from './pages/myPage/UIServiceList';
import UIServiceDetail from './pages/myPage/UIServiceDetail';
import AdminHome from './pages/AdminHome';

function App() {
  const { token } = useSelector((state) => state.user);
  return (
    <>
      <GlobalStyle />
      {token ? (
        <Column>
          <Container>
            <AdminHeader />
          </Container>
          <Container>
            <AdminVerticalHeader />
            <AdminWrapper>
              <Routes>
                <Route path='/' element={<AdminHome />} />
                <Route path='/shop/*' element={<Shop />} />
                <Route path='/neighborhood/*' element={<Neighborhood />} />
                <Route path='/coupon/*' element={<Coupon />} />
                <Route path='/customer/*' element={<Customer />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route
                  path='/mypage/uiServiceList'
                  element={<UIServiceList />}
                />
                <Route
                  path='/mypage/uiServiceList/:id'
                  element={<UIServiceDetail />}
                />
              </Routes>
            </AdminWrapper>
          </Container>
        </Column>
      ) : (
        <>
          <Header />
          <Wrapper>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/join/one' element={<JoinOneStep />} />
              <Route path='/join/two' element={<JoinTwoStep />} />
              <Route path='/join/finish' element={<Congratulate />} />
              <Route path='/login' element={<Login />} />
              <Route path='/findId' element={<FindId />} />
              <Route path='/foundId' element={<FoundId />} />
              <Route path='/findPw' element={<FindPw />} />
              <Route path='/findPw/rePassword' element={<RePw />} />
            </Routes>
          </Wrapper>
        </>
      )}
    </>
  );
}

export default App;

const Column = styled.div`
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  /* justify-content: center; */
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh-80px);
`;

const AdminWrapper = styled.div`
  width: calc(100vw - 250px);
  @media screen and (max-width: 1280px) {
    width: calc(100vw - 220px);
  }
`;
