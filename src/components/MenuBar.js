import React from 'react'
import { Button, Nav } from 'react-bootstrap';
import NavItem from './NavItem';

const MenuBar = () => {
  return (
    <Nav
      as='ul'
      variant="pills"
      defaultActiveKey="/home"
      className='justify-content-between p-3 bg-white rounded-pill align-items-center mb-4'
    >
      <div className='d-flex flex-row'>
        <NavItem isActive='true' text='All Notes' action='/' />
        <NavItem text='Archived Notes' action='/archive' />
      </div>
      <li className='nav-item ml-auto'>
        <Button variant='primary' className='rounded-pill d-flex align-items-center px-3'>
          Add Notes
        </Button>
      </li>
    </Nav>
  );
}

export default MenuBar;