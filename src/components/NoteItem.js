import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { showFormattedDate } from '../utils/data';

const NoteItem = ({ note, deleteNote, archiveNote }) => {
  return (
    <Col md={4} className='col-md-4 single-note-item'>
      <Card>
        <Card.Body>
          <h5 className='note-title text-truncate w-75 mb-0'>
            { note.title }
          </h5>
          <p className='note-date font-12 text-muted'>{ showFormattedDate(note.createdAt) }</p>
          <div className='note-content'>
            <p className='note-inner-content text-muted'>{ note.body }</p>
          </div>
          <div className='d-flex justify-content-between flex-row align-items-center bottom-0'>
            
            <Button
              onClick={() => archiveNote(note.id)}
              type='button'
              variant={!note.archived ? 'info' : 'success'}
            >
              {!note.archived ? (
                <>
                  <FontAwesomeIcon className='text-warning' icon={faArchive} />
                  <span className='ms-2'>Archive Note</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon className='text-warning' icon={faUndo} />
                  <span className='ms-2'>Undo Archive</span>
                </>
              )}
            </Button>

            <Button onClick={() => deleteNote(note.id)} type='button' variant='danger'>
              <FontAwesomeIcon className='remove-note' icon={faTrash} />
              <span className='ms-2'>Delete Note</span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default NoteItem;