import React from 'react';
import { Route, Routes } from 'react-router';
import AddNote from '../pages/AddNote';
import Archived from '../pages/Archived';
import Home from '../pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/archive' element={<Archived />} />
      <Route path='/add-notes' element={<AddNote />} />
    </Routes>
  );
}

export default Router;