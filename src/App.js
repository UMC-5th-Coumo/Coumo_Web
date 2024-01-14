import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/common/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Neighborhood from './pages/Neighborhood';
import Coupon from './pages/Coupon';
import Customer from './pages/Customer';

function App() {
  return (
    <div>
      <GlobalStyle />
      <span style={{ fontFamily: 'GmarketSans', fontWeight: 'bold' }}>
        G마켓 산스 폰트
      </span>
      <span style={{ fontWeight: '300' }}>Pretendard 폰트</span>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/neighborhood' element={<Neighborhood />} />
          <Route exact path='/coupon' element={<Coupon />} />
          <Route exact path='/customer' element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
