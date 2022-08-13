import { Container } from 'react-bootstrap';
import MenuBar from './components/MenuBar';
import Router from './routes/Router';

const App = () => {
  return (
    <Container>
      <MenuBar />
      <Router />
    </Container>
  );
}

export default App;
