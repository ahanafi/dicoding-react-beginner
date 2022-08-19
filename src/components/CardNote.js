import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Card, Col } from 'react-bootstrap';

const CardNote = ({ note }) => {
  return (
    <Col md={4} className='col-md-4 single-note-item all-category'>
      <Card>
        <Card.Body>
          <span className='side-stick'></span>
          <h5 className='note-title text-truncate w-75 mb-0'>
            { note.title }
          </h5>
          <p className='note-date font-12 text-muted'>{ note.created_at }</p>
          <div className='note-content'>
            <p className='note-inner-content text-muted'>{ note.body.substring(0, 250) }</p>
          </div>
          <div className='d-flex justify-content-between flex-row align-items-center'>
              <span className='mr-1'>
                <FontAwesomeIcon className='favourite-note text-warning' icon={faStar} />
              </span>
              <span className='mr-1'>
                <FontAwesomeIcon className='remove-note text-danger' icon={faTrash} />
              </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardNote;