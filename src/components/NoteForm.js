import React, { useState, useRef } from 'react'
import { Card, Form, Button } from 'react-bootstrap';

const NoteForm = ({ addNoteEvent }) => {
  const maxChar = 50;
  const [counter, setCounter] = useState(maxChar);
  const inputTitle = useRef();
  const inputBody = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = {
      title: inputTitle.current.value,
      body: inputBody.current.value,
      user_id: 1
    }

    addNoteEvent(note);
    resetForm();
  }

  const resetForm = () => {
    inputTitle.current.value = '';
    inputBody.current.value = '';
  };

  const charCounter = () => {
    inputTitle.current.value = inputTitle.current.value.slice(0, maxChar);
    const remainChar = parseInt(maxChar) - parseInt(inputTitle.current.value.length);
    setCounter(remainChar);
  }

  return (
    <div className='w-100'>
    <h2 className='fw-bold text-white mb-4 fs-2'>Add New Notes</h2>
      <Card className='rounded'>
        <Card.Header className='d-flex justify-content-between'>
          <Card.Title className='pt-2'>Add New Note</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={() => {return false;}} method='post'>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <div className='d-flex justify-content-between'>
                <Form.Label>Title</Form.Label>
                <Form.Label>
                  Remain Character: <span>{counter}</span>
                </Form.Label>
              </div>
              <Form.Control autoComplete='off' onChange={charCounter} ref={inputTitle} size='lg' type='text' placeholder='Title...' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Body</Form.Label>
              <Form.Control autoComplete='off' ref={inputBody} placeholder='Write your note here...' size='lg' as='textarea' rows={5} />
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