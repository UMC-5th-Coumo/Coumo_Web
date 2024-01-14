import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/common/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Neighborhood from './pages/Neighborhood';
import Coupon from './pages/Coupon';
import Customer from './pages/Customer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/neighborhood' element={<Neighborhood />} />
        <Route exact path='/coupon' element={<Coupon />} />
        <Route exact path='/customer' element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
