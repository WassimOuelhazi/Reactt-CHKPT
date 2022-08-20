import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Form.css'



function BasicExample() {
  return (
    <Form>

    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter your First Name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>



    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Last name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control type="Number" placeholder="(+216) 98765432" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group>Adress 
      <Row> 
        <Col xs={7}>
          <Form.Control placeholder="City" />
        </Col>
        <Col>
          <Form.Control placeholder="State" />
        </Col>
        <Col>
          <Form.Control placeholder="Zip" />
        </Col>
      </Row>


    </Form.Group>



   
   


      

      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder = "Type your message here."/>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;