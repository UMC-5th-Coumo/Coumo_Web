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

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route exact path='/neighborhood/*' element={<Neighborhood />} />
        <Route exact path='/coupon/*' element={<Coupon />} />
        <Route exact path='/customer/*' element={<Customer />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
