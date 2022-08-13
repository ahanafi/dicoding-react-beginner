import React from 'react';
import { Route, Routes } from 'react-router';
import AddNote from '../pages/AddNote';
import Home from '../pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-notes' element={<AddNote />} />
    </Routes>
  );
}

export default Router;