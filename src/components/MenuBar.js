import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { InputGroup, Button, Form, Nav } from 'react-bootstrap';
import NavItem from './NavItem';

const MenuBar = () => {
  return (
    <Nav
      as='ul'
      variant="pills"
      defaultActiveKey="/home"
      className='p-3 bg-white rounded-pill align-items-center mb-4'
    >
      <NavItem text='All Notes' action='/' />
      <NavItem text='Archived Notes' action='/archive' />
      <NavItem text='Add New Note' action='/add-notes' />

      <li className='nav-item ml-auto'>
        <InputGroup>
          <Form.Control
            placeholder='Search notes here...'
          />
          <Button variant="outline-primary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </li>
    </Nav>
  );
}

export default MenuBar;