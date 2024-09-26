import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


// single-page web app to calculate tax liabilities
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Peter's Tax Liability Calculator</h1>
      </header>
      {/* input forms for tax calculation parameters */}
      <div className='App-forms'>
        <Container>
          <Form>
            <Form.Group as={Row} className='mb-3' controlId='formEmploymentIncome'>
              <Form.Label column sm={2}>
                Employment Income
              </Form.Label>
              <Col sm={2}>
                <Form.Control type='number'/>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </div>


      {/* can use a range form for tax brackets */}
    </div>

  );
}

export default App;
