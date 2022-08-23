import React from 'react'
import { Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { NavLink, useLocation } from 'react-router-dom';

const MenuBar = ({ searchNoteEvent }) => {
  const classList = `nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2`;
  const location = useLocation();
  
  return (
    <Nav
      as='ul'
      variant="pills"
      defaultActiveKey="/home"
      className='p-3 bg-white rounded-pill align-items-center mb-4'
    >
      {/* Navigate to home page */}
      <Nav.Item as='li'>
        <NavLink
          to='/'
          className={classList}
          >
          Home
        </NavLink>
      </Nav.Item>

      {/* Navigate to active notes page */}
      <Nav.Item as='li'>
        <NavLink
          to='/active-notes'
          className={classList}
          >
          Active Notes
        </NavLink>
      </Nav.Item>

      {/* Navigate to archived notes page */}
      <Nav.Item as='li'>
        <NavLink
          to='/archived-notes'
          className={classList}
          >
          Archived Notes
        </NavLink>
      </Nav.Item>

      {/* Navigate to note form */}
      <Nav.Item as='li'>
        <NavLink
          to='/add-note'
          className={classList}
          >
          Add Notes
        </NavLink>
      </Nav.Item>
      
      {location.pathname !== '/add-note' ? (
        <li className='nav-item ml-auto'>
          <SearchBar searchNote={searchNoteEvent} />
        </li>
      ) : (
        <></>
      )}
    </Nav>
  );
}

export default MenuBar;