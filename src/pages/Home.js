import NoteContainer from '../components/NoteContainer';

const Home = () => {
  return (
    <>
      <h2 className='fw-bold text-white mb-4 fs-2'>All Notes</h2>
      <NoteContainer isArchived={false} />
    </>
  );
}

export default Home;