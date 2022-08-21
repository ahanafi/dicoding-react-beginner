import React, { forwardRef } from 'react'
import { Row } from 'react-bootstrap';
import NoteItem from './NoteItem';

const NoteList = forwardRef(({ id, notes, deleteNote, archiveNote }, ref) => {
  return (
    <>
      <Row ref={ref} id={id} className='note-has-grid mt-3'>
        {notes.length > 0 ? (
            notes.map(note => (
              <NoteItem
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
                />
            )
          )
        ) : (
          <div className='d-flex flex-1 justify-content-center aligns-item-center py-5 my-5'>
            <h3 className='text-white italic'>Note is empty...</h3>
          </div>
        )}
      </Row>
    </>
  );
});

export default NoteList;
