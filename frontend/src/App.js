import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  useEffect(() => {
    document.title = 'Tax Liability Calculator';
  }, []);

  return (
    <div className="App">
      {/* set document metadata */}
      <meta name="keywords" content="HTML, CSS, JavaScript, React, Node.js"/>
      <meta name="author" content="Peter Woon-Fat"/>
      <meta name="description" content="Web app used to calculate tax liabilities"/>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      {/* example content */}
      <header className="App-header">
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
      </header>
    </div>

    // single-page web app to calculate tax liabilities

  );
}

export default App;
