import './App.css';
import {Navbar, Container, Form, Button, Card} from "react-bootstrap";


function App() {
  return(
  <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={"./assets/img/logo.jpg"}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Perfection
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Form className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<Card className="text-center">
  <Card.Body>
    <Card.Title>Careers</Card.Title>
    <Card.Text>
      Are you looking to work with enthusiastic people who are always improving & challenging the status?
      we offer an open environment where bright ideas are given a chance to shine and everyone is eager to lend a helping hand.
      
    </Card.Text>
    <Button variant="primary">Join us</Button>
  </Card.Body>
</Card>
  </>);
}

export default App;
