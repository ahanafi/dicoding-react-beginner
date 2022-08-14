import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { API_ENDPOINT, apiOptions } from '../api/notesApi';
import CardNote from './CardNote';
import Loading from './Loading';

const NoteContainer = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllNotes = async () => {
    try {
      const response = await axios.get(API_ENDPOINT.NOTES.LIST, apiOptions);
      const results = response.data;
      setNotes(results.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <Loading isOpen={loading} />
      <Row md={4} id='note-full-container' className='note-has-grid mt-5'>
        {!loading && notes.length > 1 ? (
          notes.map(note => (<CardNote key={note.id} note={note} />))
        ) : ('')}
      </Row>
    </>
  );
}

export default NoteContainer;
