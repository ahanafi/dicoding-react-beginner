import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavItem = ({ text, action }) => {
  return (
    <Nav.Item as='li'>
      <Nav.Link
        as={Link}
        to={action}
        className={'rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active'}
        >
        {text}
      </Nav.Link>
    </Nav.Item>
  )
}

export default NavItem;