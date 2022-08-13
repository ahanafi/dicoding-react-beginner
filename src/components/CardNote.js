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
          <p className='note-date font-12 text-muted'>01 April 2002</p>
          <div className='note-content'>
            <p className='note-inner-content text-muted'>{ note.body }</p>
          </div>
          <div className='d-flex align-items-center'>
              <span className='mr-1'><i className='fa fa-star favourite-note'></i></span>
              <span className='mr-1'><i className='fa fa-trash remove-note'></i></span>
              <div className='ml-auto'>
                  <div className='category-selector btn-group'>
                      <a className='nav-link dropdown-toggle category-dropdown label-group p-0' data-toggle='dropdown' href='/' role='button' aria-haspopup='true' aria-expanded='true'>
                          <div className='category'>
                              <div className='category-business'></div>
                              <div className='category-social'></div>
                              <div className='category-important'></div>
                              <span className='more-options text-dark'><i className='icon-options-vertical'></i></span>
                          </div>
                      </a>
                      <div className='dropdown-menu dropdown-menu-right category-menu'>
                          <a className='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success' href='/'>
                              <i className='mdi mdi-checkbox-blank-circle-outline mr-1'></i>Business
                          </a>
                          <a className='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info' href='/'>
                              <i className='mdi mdi-checkbox-blank-circle-outline mr-1'></i> Social
                          </a>
                          <a className='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger' href='/'>
                              <i className='mdi mdi-checkbox-blank-circle-outline mr-1'></i> Important
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardNote;