import React from 'react'
import { Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';

const MenuBar = () => {
  return (
    <Nav
      as='ul'
      variant="pills"
      defaultActiveKey="/home"
      className='p-3 bg-white rounded-pill align-items-center mb-4'
    >
      <Nav.Item as='li'>
        <Nav.Link
          as='button'
          className={`rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active`}
          >
          Add Notes
        </Nav.Link>
      </Nav.Item>

      <li className='nav-item ml-auto'>
        <SearchBar />
      </li>
    </Nav>
  );
}

export default MenuBar;