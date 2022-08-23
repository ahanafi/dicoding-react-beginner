import { Routes, Route } from 'react-router-dom';
import NotePages from '../components/NotePages';
import NoteForm from '../components/NoteForm';

const Router = ({
  /* Notes page properties */
  noteListElements,
  deleteNoteEvent,
  archiveNoteEvent,

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
          deleteNote={deleteNoteEvent}
          archiveNote={archiveNoteEvent}
          />
      } />

      {/* Active Notes */}
      <Route path='/active-notes' exact element={
        <NotePages
          isArchived={false}
          noteListElements={noteListElements}
          deleteNote={deleteNoteEvent}
          archiveNote={archiveNoteEvent}
          />
      } />

      {/* Archived Notes */}
      <Route path='/archived-notes' exact element={
        <NotePages
          isArchived={true}
          noteListElements={noteListElements}
          deleteNote={deleteNoteEvent}
          archiveNote={archiveNoteEvent}
          />
      } />


      <Route path='/add-note' element={
        <NoteForm addNoteEvent={addNoteEvent} />
      } />
    </Routes>
  );
}

export default Router;
