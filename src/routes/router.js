import { Routes, Route } from 'react-router-dom';
import ActiveNotes from '../components/ActiveNotes';
import ArchivedNotes from '../components/ArchivedNotes';
import NoteForm from '../components/NoteForm';

const Router = ({
  /* Active Notes properties */
  noteListElements,
  activeNotes,
  deleteNote,
  archiveNote,
  
  /* Archived Notes propeties */
  archivedNotes,

  /* Add notes propertie */
  addNoteEvent
}) => {
  return (
    <Routes>
      {/* Homepage */}
        <Route path='/' exact element={
        <ActiveNotes
          notes={activeNotes}
          noteListElements={noteListElements}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          />
      } />

      {/* Active Notes */}
        <Route path='/active-notes' exact element={
        <ActiveNotes
          notes={activeNotes}
          noteListElements={noteListElements}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          />
      } />

      {/* Archived Notes */}
        <Route path='/archived-notes' exact element={
        <ArchivedNotes
          notes={archivedNotes}
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
