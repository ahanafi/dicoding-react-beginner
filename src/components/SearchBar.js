import React, { useRef } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, Button, Form } from 'react-bootstrap';

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
  }

  return (
    <InputGroup>
      <Form.Control
        placeholder='Search notes here...'
        onKeyUp={handleSearch}
      />
      <Button variant="outline-primary">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
