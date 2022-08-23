import { Routes, Route } from 'react-router-dom';
import NotePages from '../components/NotePages';
import NoteForm from '../components/NoteForm';

const Router = ({
  /* Notes page properties */
  noteListElements,
  deleteNote,
  archiveNote,

  /* Add notes propertie */
  addNoteEvent
}) => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path='/' exact element={
        <NotePages
          isArchived={false}
          noteListElements={noteListElements}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          />
      } />

      {/* Active Notes */}
      <Route path='/active-notes' exact element={
        <NotePages
          isArchived={false}
          noteListElements={noteListElements}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          />
      } />

      {/* Archived Notes */}
      <Route path='/archived-notes' exact element={
        <NotePages
          isArchived={true}
          noteListElements={noteListElements}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          />
      } />


      <Route path='/add-note' element={
        <NoteForm addNoteEvent={addNoteEvent} />
      } />
    </Routes>
  );
}

export default Router;
