import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Loading from './Loading';

const StyledDiv = styled.div`
  display: block;
  width: 100%;
  margin-top:3rem;
`;

const AddNote = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <StyledDiv>
      <Loading isOpen={loading} />
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