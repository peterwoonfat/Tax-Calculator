import logo from './logo.svg';
import './App.css';

function App() {
  const meta = {
    title: 'Some Meta Title',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
  }
  return (
    <div className="App">
      <meta name="keywords" content="HTML, CSS, JavaScript, React, Node.js"/>
      <meta name="author" content="Peter Woon-Fat"/>
      <meta name="description" content="Web app used to calculate tax liabilities"/>
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
