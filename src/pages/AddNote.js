import React from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { API_ENDPOINT, apiOptions } from '../api/notesApi';
import { useNavigate } from 'react-router';

const StyledDiv = styled.div`
  display: block;
  width: 100%;
  margin-top:3rem;
`;

const AddNote = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      title: form.get('title'),
      body: form.get('body'),
      user_id: 1
    };

    apiOptions.method = 'POST';
    apiOptions.body = JSON.stringify(data);
    
    const result = await fetch(API_ENDPOINT.NOTES.LIST, apiOptions)
      .then(response => response.json())
      .catch(error => console.error(error));
    
    if (result.success) {
      alert('Success');
      navigate('/');
    } else {
      alert(result.message);
    }
  }

  return (
    <StyledDiv>
      <Card className='rounded'>
        <Card.Header>
          <Card.Title className='pt-2'>Add New Note</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} method='post'>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <div className='d-flex justify-content-between'>
                <Form.Label>Title</Form.Label>
                <Form.Label>
                  Remain Character: <span>50</span>
                </Form.Label>
              </div>
              <Form.Control name='title' maxLength={50} size='lg' type='text' placeholder='Title...' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Body</Form.Label>
              <Form.Control name='body' placeholder='Write your note here...' size='lg' as='textarea' rows={5} />
            </Form.Group>
            <div className='d-flex justify-content-end'>
            <Button type='submit' variant='primary' size='lg'>Submit</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </StyledDiv>
  );
}

export default AddNote;