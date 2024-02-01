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

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/neighborhood/*' element={<Neighborhood />} />
        <Route path='/coupon/*' element={<Coupon />} />
        <Route path='/customer/*' element={<Customer />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/join/one' element={<JoinOneStep />} />
        <Route path='/join/two' element={<JoinTwoStep />} />
        <Route path='/join/finish' element={<Congratulate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/findId' element={<FindId />} />
        <Route path='/foundId' element={<FoundId />} />
        <Route path='/findPw' element={<FindPw />} />
        <Route path='/findPw/rePassword' element={<RePw />} />
      </Routes>
    </>
  );
}

export default App;
