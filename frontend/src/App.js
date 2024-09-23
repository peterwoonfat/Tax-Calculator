import logo from './logo.svg';
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
      {/* example content */}
      <header className="App-header">
        <h1>Peter's Tax Liability Calculator</h1>
      </header>
      {/* input forms for tax calculation parameters */}
      <div className='App-forms'>
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Label>form 1</Form.Label>
              </Col>
              <Col>
                <Form.Control/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>form 2</Form.Label>
              </Col>
              <Col>
                <Form.Control/>
              </Col>
            </Row>
          </Form>
        </Container>

      </div>


      {/* can use a range form for tax brackets */}
    </div>

  );
}

export default App;
