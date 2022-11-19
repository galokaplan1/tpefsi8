
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import './Card.css';
import { useNavigate } from "react-router-dom"

const Cards = (props) => {
  const navigate = useNavigate()
    return (
      <Col md={4}>
        <div onClick={() => navigate(`/products/${props.product.id}`)}>
          <Card className='card borde' style={{ width: '20rem' }}>
            <Card.Img variant="top" className='imagen' src={props.product.thumbnail} />
            <Card.Body>
              <Card.Title>{props.product.title}</Card.Title>
              <Card.Text>
              {props.product.description}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
      </Col>
    );
}

export default Cards;
