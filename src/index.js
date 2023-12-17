import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from './signin/Signin';
import Menu from './menu/Menu';
import Vechicles from './menulist/Vehicles';
import Energys from './menulist/Energys';
import Charging from './menulist/Charging';
import Discovering from './menulist/Discovering';
import Shoping from './menulist/Shoping';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/sign' element={<Signin />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/vechicles' element={<Vechicles />} />
      <Route path='energy' element={<Energys/>}/>
      <Route path='/charging' element={<Charging/>}/>
      <Route path='/discovering' element={<Discovering/>}/>
      <Route path='/shoping' element={<Shoping/>}/>
    </Routes>
  </BrowserRouter>
)
