import React from 'react'
import { Row } from 'react-bootstrap';
import CardNote from './CardNote';
// import Loading from './Loading';

const NoteList = ({ notes }) => {
  return (
    <>
      {/* <Loading isOpen={loading} /> */}
      <Row id='note-full-container' className='note-has-grid mt-3'>
        {notes.length > 0 ? (
            notes.map(note => (
              <CardNote key={note.id} note={note} />
            )
          )
        ) : (
          <div className='d-flex flex-1 justify-content-center aligns-item-center pt-5'>
            <h3 className='text-white italic'>Note is empty...</h3>
          </div>
        )}
      </Row>
    </>
  );
}

export default NoteList;
