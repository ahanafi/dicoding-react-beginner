import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import MenuBar from './MenuBar';
import { getInitialData } from '../utils/data';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const NoteApp = () => {
  const initialData = getInitialData();
  const [notes, setNote] = useState(initialData);
  const [displayForm, setDisplayForm] = useState(false);
  const activeNoteElements = useRef();
  const archivedNoteElements = useRef();

  const handleDisplayForm = (display) => setDisplayForm(display);

  const handleAddNote = (note) => {
    notes.push(note);
    setNote(notes);
  };

  const deleteNote = (noteId) => {
    const newNotes = notes.filter(note => note.id !== noteId);
    setNote(newNotes);
  }

  const archiveNote = (noteId) => {
    const newNotes = notes.map(note => {
      if (note.id === noteId) {
        note.archived = note.archived === false ? true : false;
      }
      return note;
    });

    setNote(newNotes);
  }

  const searchNote = (query) => {
    filterNotes(activeNoteElements.current, query);
    filterNotes(archivedNoteElements.current, query);
  }

  const filterNotes = (el, query) => {
    el.querySelectorAll('.note-title')
      .forEach(noteEl => {
        const singleNote = noteEl.parentElement.parentElement.parentElement; // .single-note
        const noteTitle = noteEl.innerText.toLowerCase();
        if (noteTitle.indexOf(query.toLowerCase()) > -1) {
          singleNote.classList.remove('d-none');
        } else {
          singleNote.classList.add('d-none');
        }
      });
  }

  return (
    <Container>
      <MenuBar
        setDisplayForm={handleDisplayForm}
        searchNote={searchNote}
      />

      <NoteForm
        style={{ display: displayForm ? 'block' : 'none'}}
        setDisplayForm={handleDisplayForm}
        addNoteEvent={handleAddNote}
        />

      {/* Active Notes */}
      <h2 className='fw-bold text-white mb-4 fs-2'>Active Notes</h2>
      <NoteList
        ref={activeNoteElements}
        id='active-note-list'
        notes={notes.filter(note => note.archived !== true)}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />

      {/* Archived Notes */}
      <h2 className='fw-bold text-white mb-4 fs-2'>Archived Notes</h2>
      <NoteList
        ref={archivedNoteElements}
        id='archived-note-list'
        notes={notes.filter(note => note.archived !== false)}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
    </Container>
  );
}

export default NoteApp;
