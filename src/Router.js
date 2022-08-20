import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductParfum from './pages/Product/ProductParfum';
import './styles/reset.scss';
import './styles/common.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/parfum" element={<ProductParfum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
