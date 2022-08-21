import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import MenuBar from './MenuBar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import Loading from './Loading';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { API_ENDPOINT, apiOptions } from '../api/noteApi';
import axios from 'axios';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);
  const activeNoteElements = useRef();
  const archivedNoteElements = useRef();
  const [loading, setLoading] = useState(true);
  const Alert = withReactContent(Swal);

  useEffect(() => {
    getActiveNotes(); // active notes
    getArchivedNotes(); // archived notes

     //eslint-disable-next-line
  }, [])

  const getAllNotes = async (isArchived) => {
    setLoading(true);
    const url = isArchived ? API_ENDPOINT.NOTES.ARCHIVED : API_ENDPOINT.NOTES.LIST;
    try {
      const response = await axios.get(url, apiOptions);
      const results = response.data.data;
      
      if (isArchived) {
        setArchivedNotes(results.data);
      } else {
        setNotes(results.data);
      }
      
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const getActiveNotes = async () => getAllNotes(false);
  const getArchivedNotes = async () => getAllNotes(true);

  const handleDisplayForm = (display) => setDisplayForm(display);

  const handleAddNote = async (note) => {
    setLoading(true);
    try {
      const response = await axios.post(API_ENDPOINT.NOTES.LIST, note, apiOptions);
      const result = response.data;
      
      if (result.success) {
        setLoading(false);
        showAlert('Success', result.message);
      } else {
        setLoading(false);
        showAlert('Oops', result.message, 'error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (noteId) => {
    setLoading(true);
    try {
      const response = await axios.delete(API_ENDPOINT.NOTES.DELETE(noteId), apiOptions);
      const result = response.data;
      
      if (result.success) {
        setLoading(false);
        showAlert('Success', result.message);
      } else {
        setLoading(false);
        showAlert('Oops', result.message, 'error');
      }
    } catch (error) {
      console.error(error);
    }

    getActiveNotes();
    getArchivedNotes();
  }

  const archiveNote = async (noteId) => {
    setLoading(true);
    const response = await axios.get(API_ENDPOINT.NOTES.DETAIL(noteId), apiOptions);
    const note = response.data.data;
    const message = note.is_archived === 1 ? 'The note was successfully changed to active!' : 'The note was successfully archived!';
    
    note.is_archived = note.is_archived === 0 ? 1 : 0;
    note.user_id = 1; // TODO: Change it later when it was integrated with user
    
    try {
      const response = await axios.put(API_ENDPOINT.NOTES.UPDATE(noteId), note, apiOptions);
      const result = response.data;
      
      if (result.success) {
        setLoading(false);
        showAlert('Success', message);
      } else {
        setLoading(false);
        showAlert('Oops', response.message, 'error');
      }
    } catch (error) {
      console.error(error);
    }

    getActiveNotes();
    getArchivedNotes();
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
          notes={notes}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
        />

        {/* Archived Notes */}
        <h2 className='fw-bold text-white mb-4 fs-2'>Archived Notes</h2>
        <NoteList
          ref={archivedNoteElements}
          id='archived-note-list'
          notes={archivedNotes}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
        />
      </div>
    </Container>
  );
}

export default NoteApp;
