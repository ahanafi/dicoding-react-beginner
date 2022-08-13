import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { API_ENDPOINT, apiOptions } from '../api/notesApi';
import CardNote from './CardNote';
import Loading from './Loading';

const NoteContainer = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINT.NOTES.LIST, apiOptions)
      .then(response => response.json())
      .then(notes => {
        setLoading(false);
        setNotes(notes.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      {loading ? (<Loading />) : (
        <Row md={4} id='note-full-container' className='note-has-grid mt-5'>
        {notes.length > 0 ? (
          notes.map(note => (<CardNote key={note.id} note={note} />))
        ) : (
          <h1>No Data</h1>
        )}
        </Row>
      )}
      
    </>
  );
}

export default NoteContainer;
