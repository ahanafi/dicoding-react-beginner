import React from 'react'
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem';

const MenuBar = () => {
  return (
    <Nav
      as='ul'
      variant="pills"
      defaultActiveKey="/home"
      className='justify-content-start p-3 bg-white rounded-pill align-items-center mb-4'
    >
      <NavItem text='All Notes' action='/' />
      <NavItem text='Archived Notes' action='/archive' />
      <NavItem text='Add New Note' action='/add-notes' />
    </Nav>
  );
}

export default MenuBar;