import React from 'react';
import ReactDOM from 'react-dom/client';
import NoteApp from './components/NoteApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
