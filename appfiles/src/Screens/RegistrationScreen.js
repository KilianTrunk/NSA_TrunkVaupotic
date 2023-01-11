import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

export default function Registration() {
    return (
        <Container>
      <Form className='padding'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email naslov</Form.Label>
          <Form.Control type="email" placeholder="Vnesite email naslov" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Uporabniško ime</Form.Label>
          <Form.Control type="text" placeholder="Vnesite uporabniško ime" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Geslo</Form.Label>
          <Form.Control type="password" placeholder="Vnesite geslo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Zapomni si me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Potrdi
        </Button>
      </Form>
    </Container>
    );
}
