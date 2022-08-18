import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { API_ENDPOINT, apiOptions } from '../api/notesApi';
import CardNote from './CardNote';
import Loading from './Loading';

const NoteContainer = ({ isArchived }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllNotes = async () => {
    const url = isArchived ? API_ENDPOINT.NOTES.LIST : API_ENDPOINT.NOTES.ARCHIVED;
    try {
      const response = await axios.get(url, apiOptions);
      const results = response.data.data;
      setNotes(results.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  useEffect(() => {
    getAllNotes();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Loading isOpen={loading} />
      <Row md={4} id='note-full-container' className='note-has-grid mt-3'>
        {!loading && notes.length > 1 ? (
          notes.map(note => (<CardNote key={note.id} note={note} />))
        ) : ('')}
      </Row>
    </>
  );
}

export default NoteContainer;
