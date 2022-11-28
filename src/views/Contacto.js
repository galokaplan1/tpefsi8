import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contacto() {
  return (
    <div>
        <h1>Llene sus datos y lo estaremos contactando pronto</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Sugerencias</Form.Label>
            <Form.Control as="textarea" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default Contacto;