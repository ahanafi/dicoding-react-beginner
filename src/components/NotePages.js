import React, { useState, useEffect } from 'react';
import NoteList from './NoteList'
import axios from 'axios';
import { API_ENDPOINT, apiOptions } from '../api/noteApi';
import Loading from './Loading';
import { useLocation } from 'react-router';

const NotePages = ({
  noteListElements,
  deleteNote,
  archiveNote,
  isArchived,
  loader
}) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const getAllNotes = async () => {
    setLoading(true);
    const isArchivedPage = location.pathname.replace('-notes', '').toLowerCase() === '/archived';
    const url = isArchivedPage ? API_ENDPOINT.NOTES.ARCHIVED : API_ENDPOINT.NOTES.LIST;
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
    // eslint-disable-next-line
  }, [location]);
  

  return (
    <>
      {(loading && !loader) || loading ? (
        <Loading isOpen={loading} />
      ) : (
        <>
          <h2 className='fw-bold text-white mb-4 fs-2'>{isArchived ? 'Archived' : 'Active'} Notes</h2>
          <NoteList
            ref={noteListElements}
            id='note-list'
            notes={notes}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
          />
        </>
      )}
    </>
  );
}

export default NotePages;
