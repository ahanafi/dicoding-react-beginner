import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MenuBar from './MenuBar';
import { getInitialData } from '../utils/data';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const NoteApp = () => {
  const initialData = getInitialData();
  const [notes, setNote] = useState(initialData);
  const [displayForm, setDisplayForm] = useState(false);

  const handleDisplayForm = (display) => setDisplayForm(display);

  const handleAddNote = (note) => {
    notes.push(note);
    setNote(notes);
  };

  return (
    <Container>
      <MenuBar setDisplayForm={handleDisplayForm} />

      <NoteForm
        style={{ display: displayForm ? 'block' : 'none'}}
        setDisplayForm={handleDisplayForm}
        addNoteEvent={handleAddNote}
        />

      <h2 className='fw-bold text-white mb-4 fs-2'>All Notes</h2>
      <NoteList notes={notes} />
    </Container>
  );
}

export default NoteApp;
