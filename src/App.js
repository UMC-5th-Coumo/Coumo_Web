import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/common/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Neighborhood from './pages/Neighborhood';
import Coupon from './pages/Coupon';
import Customer from './pages/Customer';
import Login from './pages/Login';
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
import ScrollTop from './components/common/ScrollTop';
import NotFound from './pages/NotFound';
import Join from './pages/Join';
import Congratulate from './pages/join/Congratulate';

function App() {
  const { token } = useSelector((state) => state.user);
  return (
    <>
      <GlobalStyle />
      <ScrollTop />
      {token ? (
        <Column>
          <Container>
            <AdminHeader />
          </Container>
          <Container>
            <AdminVerticalHeader />
            <AdminWrapper>
              <Routes>
                <Route path='/login' element={<MyPage />} />
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
                <Route path='*' element={<NotFound />} />
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
              <Route path='/join/*' element={<Join />} />
              <Route path='/login' element={<Login />} />
              <Route path='/findId' element={<FindId />} />
              <Route path='/foundId' element={<FoundId />} />
              <Route path='/findPw' element={<FindPw />} />
              <Route path='/findPw/rePassword' element={<RePw />} />
              <Route path='*' element={<NotFound />} />
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
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh-80px);
`;

const AdminWrapper = styled.div`
  width: calc(100vw - 250px);
  margin-left: 250px;
  @media screen and (max-width: 1280px) {
    width: calc(100vw - 220px);
    margin-left: 220px;
  }
`;
