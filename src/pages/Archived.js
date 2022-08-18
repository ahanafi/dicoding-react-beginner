import NoteContainer from '../components/NoteContainer';

const Archived = () => {
  return (
    <>
      <h2 className='fw-bold text-white mb-4 fs-2'>Archived Notes</h2>
      <NoteContainer isArchived={true} />
    </>
  );
}

export default Archived;