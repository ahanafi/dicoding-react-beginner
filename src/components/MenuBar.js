import React from 'react'
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem';

const MenuBar = () => {
  return (
    <Nav
      as='ul'
      variant="pills"
      defaultActiveKey="/home"
      className='justify-content-between p-3 bg-white rounded-pill align-items-center'
    >
      <NavItem text='All Notes' action='/' />
      <NavItem text='Add New Note' action='/add-notes' />
    </Nav>
  );
}

export default MenuBar;