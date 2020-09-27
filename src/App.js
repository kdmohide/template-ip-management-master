import React from 'react';
import { Container } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
import ToolbarComp from './Components/ToolbarComp';

function App() {
  return (
    <React.Fragment>
      <Container>
        <ToolbarComp />
      </Container>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </React.Fragment>
  );
}

export default App;
