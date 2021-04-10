import React from 'react'
import NavBar from './components/navBar/NavBar';
import Router from './routes/Router'
import {BrowserRouter} from 'react-router-dom'
import { Container } from './styled';

function App() {
  return (
    <Container>
      <BrowserRouter>
          <NavBar />
          <Router />
      </BrowserRouter>
    </Container>
  );
}

export default App;
