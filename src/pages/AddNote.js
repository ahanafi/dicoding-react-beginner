import React from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: block;
  width: 100%;
  margin-top:3rem;
`;

const AddNote = () => {
  return (
    <StyledDiv>
      <Card className='rounded'>
        <Card.Header>
          <Card.Title className='pt-2'>Add New Note</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <div class='d-flex justify-content-between'>
                <Form.Label>Title</Form.Label>
                <Form.Label>
                  Remain Character: <span>50</span>
                </Form.Label>
              </div>
              <Form.Control maxLength={50} size='lg' type='text' placeholder='Title...' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Body</Form.Label>
              <Form.Control placeholder='Write your note here...' size='lg' as='textarea' rows={5} />
            </Form.Group>
            <div className='d-flex justify-content-end'>
            <Button variant='primary' size='lg'>Submit</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </StyledDiv>
  );
}

export default AddNote;