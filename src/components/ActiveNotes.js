import React from 'react';
import NoteList from './NoteList'

const ActiveNotes = ({
  noteListElements,
  notes,
  deleteNote,
  archiveNote
}) => {
  return (
    <>
      <h2 className='fw-bold text-white mb-4 fs-2'>Active Notes</h2>
      <NoteList
        ref={noteListElements}
        id='note-list'
        notes={notes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
    </>
  );
}

export default ActiveNotes;
