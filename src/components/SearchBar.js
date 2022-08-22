import React, { useRef } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, Button, Form } from 'react-bootstrap';

const SearchBar = ({ searchNote }) => {
  const inputQuery = useRef();
  
  const handleSearch = () => {
    searchNote(inputQuery.current.value);
  }

  return (
    <InputGroup>
      <Form.Control
        ref={inputQuery}
        placeholder='Search notes here...'
        onChange={handleSearch}
      />
      <Button variant="outline-primary">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
