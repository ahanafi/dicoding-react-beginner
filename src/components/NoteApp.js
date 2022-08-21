import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import MenuBar from './MenuBar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import notesData from '../utils/notes.json';
import Loading from './Loading';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const NoteApp = () => {
  const initialData = notesData;
  const [notes, setNote] = useState(initialData);
  const [displayForm, setDisplayForm] = useState(false);
  const activeNoteElements = useRef();
  const archivedNoteElements = useRef();
  const [loading, setLoading] = useState(true);
  const Alert = withReactContent(Swal);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])

  const handleDisplayForm = (display) => setDisplayForm(display);

  const handleAddNote = (note) => {
    setLoading(true);
    notes.push(note);
    setNote(notes);
    showAlert('Success', 'The note was succesfully inserted!');
  };

  const deleteNote = (noteId) => {
    setLoading(true);
    const newNotes = notes.filter(note => note.id !== noteId);
    setNote(newNotes);
    showAlert('Success', 'The note was succesfully deleted!');
  }

  const archiveNote = (noteId) => {
    setLoading(true);
    const isArchived = notes.filter(note => note.id === noteId)[0].archived;
    const message = isArchived ? 'The note was successfully changed to active!' : 'The note was successfully archived!';

    const newNotes = notes.map(note => {
      if (note.id === noteId) {
        note.archived = note.archived === false ? true : false;
      }
      return note;
    });

    setNote(newNotes);
    showAlert('Success', message);
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

  const showAlert = (title, message, type = 'success') => {
    setTimeout(() => Alert.fire(title, message, type).then(() => setLoading(false)), 500);
  }

  return (
    <Container>
      <MenuBar
        setDisplayForm={handleDisplayForm}
        searchNote={searchNote}
      />

      <Loading isOpen={loading} />

      <div style={{ display: loading ? 'none' : 'block' }}>
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
      </div>
    </Container>
  );
}

export default NoteApp;
