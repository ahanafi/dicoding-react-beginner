import React, { useState, useRef } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import Loading from './Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const NoteForm = ({ style, setDisplayForm, addNoteEvent }) => {
  const [loading, setLoading] = useState(false);
  const inputTitle = useRef();
  const inputBody = useRef();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const note = {
      id: +new Date(),
      title: inputTitle.current.value,
      body: inputBody.current.value,
      archived: false,
      creatdAt: new Date()
    }

    addNoteEvent(note);
    
    setTimeout(() => {
      setLoading(false);
      resetForm();
      setDisplayForm(false);
    }, 500);

  }

  const resetForm = () => {
    inputTitle.current.value = '';
    inputBody.current.value = '';
  };

  return (
    <div style={style} className='w-100 mt-5'>
      <Loading isOpen={loading} />
      <Card className='rounded'>
        <Card.Header className='d-flex justify-content-between'>
          <Card.Title className='pt-2'>Add New Note</Card.Title>
          <Button onClick={() => setDisplayForm(false)} variant='secondary' className='px-3' size='sm'>
            <FontAwesomeIcon icon={faClose} />
            <span className='ms-2'>Close Form</span>
          </Button>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={() => {return false;}} method='post'>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <div className='d-flex justify-content-between'>
                <Form.Label>Title</Form.Label>
                <Form.Label>
                  Remain Character: <span>50</span>
                </Form.Label>
              </div>
              <Form.Control ref={inputTitle} maxLength={50} size='lg' type='text' placeholder='Title...' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Body</Form.Label>
              <Form.Control ref={inputBody} placeholder='Write your note here...' size='lg' as='textarea' rows={5} />
            </Form.Group>
            <div className='d-flex justify-content-end'>
            <Button type='button' onClick={handleSubmit} variant='primary' size='lg'>Submit</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NoteForm;