import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import react-bootstrap components
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


// single-page web app to calculate tax liabilities
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Peter's Tax Liability Calculator</h1>
      </header>

      {/* breadcrumbs to indicate where the user is */}
      <Breadcrumb>
        <Breadcrumb.Item active>Tax Liability Calculator</Breadcrumb.Item>
        <Breadcrumb.Item href='.Tax-brackets'>Tax Brackets</Breadcrumb.Item>
      </Breadcrumb>


      {/* input forms for tax calculation parameters */}
      <div className='App-forms'>
        <Container>
          <h2>Income Sources</h2>
          <Form>
            <Form.Group as={Row} className='mb-3' controlId='formEmploymentIncome'>
              <Form.Label column sm={2} className='form-label'>
                Employment Income
              </Form.Label>
              <Col sm={2}>
                <InputGroup className='mb-2'>
                  <InputGroup.Text className='no-bg'>$</InputGroup.Text>
                  <Form.Control type='number' min='0'/>
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3' controlId='formSelfEmploymentIncome'>
              <Form.Label column sm={2} className='form-label'>
                Self Employment Income
              </Form.Label>
              <Col sm={2}>
                <InputGroup className='mb-2'>
                  <InputGroup.Text className='no-bg'>$</InputGroup.Text>
                  <Form.Control type='number' min='0'/>
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3' controlId='formInvestmentIncome'>
              <Form.Label column sm={2} className='form-label'>
                Investment Income
              </Form.Label>
              <Col sm={2}>
                <InputGroup className='mb-2'>
                  <InputGroup.Text className='no-bg'>$</InputGroup.Text>
                  <Form.Control type='number' min='0'/>
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3' controlId='formCapitalGainLoss'>
              <Form.Label column sm={2} className='form-label'>
                Capital Gains/Losses
              </Form.Label>
              <Col sm={2}>
                <InputGroup className='mb-2'>
                  <InputGroup.Text className='no-bg'>$</InputGroup.Text>
                  <Form.Control type='number' min='0'/>
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3' controlId='formOtherIncome'>
              <Form.Label column sm={2} className='form-label'>
                Other Income
              </Form.Label>
              <Col sm={2}>
                <InputGroup className='mb-2'>
                  <InputGroup.Text className='no-bg'>$</InputGroup.Text>
                  <Form.Control type='number' min='0'/>
                </InputGroup>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </div>


      {/* can use a range form for tax brackets */}
      <div className='Tax-brackets'>

      </div>
    </div>

  );
}

export default App;
