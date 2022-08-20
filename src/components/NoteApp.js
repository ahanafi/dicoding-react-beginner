import { Container } from 'react-bootstrap';
import MenuBar from './MenuBar';
import { getInitialData } from '../utils/data';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const NoteApp = () => {
  const notes = getInitialData();
  return (
    <Container>
      <MenuBar />

      <NoteForm />

      <h2 className='fw-bold text-white mb-4 fs-2'>All Notes</h2>
      <NoteList notes={notes} />
    </Container>
  );
}

export default NoteApp;
