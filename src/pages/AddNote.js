import React, { useState, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { API_ENDPOINT, apiOptions } from '../api/notesApi';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../components/Loading';
import axios from 'axios';

const Alert = withReactContent(Swal);

const StyledDiv = styled.div`
  display: block;
  width: 100%;
  margin-top:3rem;
`;

const AddNote = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const data = {
      title: form.get('title'),
      body: form.get('body'),
      user_id: 1
    };

    try {
      const response = await axios.post(API_ENDPOINT.NOTES.LIST, data, apiOptions);
      const result = response.data;
      
      if (result.success) {
        setLoading(false);
        Alert.fire('Success', result.message, 'success')
          .then(() => navigate('/'));
      } else {
        setLoading(false);
        Alert.fire('Oops', result.message, 'error');
      }
    } catch (error) {
      console.error(error);
    }
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