import { Routes, Route } from 'react-router-dom';
import NoteApp from '../components/NoteApp';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<NoteApp />} />
    </Routes>
  );
}

export default Router;
