import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ProductsPage from './pages/ProductsPage'
import './App.module.scss'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/collections/all-plants' element={<ProductsPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
