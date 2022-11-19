import { useParams } from "react-router-dom"
import SpecificProduct from "../components/Services/SpecificProduct"
import delta from '../images/delta.png';
import ferrum from '../images/ferrum.png';
import logoips from '../images/logo_ips.png';
import tigre from '../images/tigre.png';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { ActionTypes, useContextState } from "../Context";

const SingleProduct = () => {
    const {contextState, setContextState} = useContextState() 
    const { id } = useParams()
    const Product=SpecificProduct(id)
    const existe = contextState.product.find(item => item.id === Product.id)
    return(
        <div>
            <h1>{Product.title}</h1>
            <img src={Product.thumbnail}></img>
            <h1>{Product.brand}</h1>
            <h1>{Product.description}</h1>
            <h1>Precio: ${Product.price}</h1>
            {
                existe ? (
                    <Button variant="danger" onClick={() => setContextState({type: ActionTypes.SetEliminarId, value: Product.id})}>Eliminar del carrito</Button>
                ) : (
                    <Button variant="success" onClick={() => setContextState({type: ActionTypes.SetProduct, value: Product})}>Agregar al carrito</Button>
                )
            }
            
            <hr className="espacio" />
            <Container>
                <h4 className="texto"><b>Marcas con las que trabajamos</b></h4>
                <Row>
                    <Col md={4}> <img src={ferrum} alt="Ikea" className="ads" /> </Col>
                    <Col md={4}> <img src={delta} alt="Ikea" className="ads" /> </Col>
                    <Col md={3}> <img src={tigre} alt="Ikea" className="ads" /> </Col>
                    <Col md={1}> <img src={logoips} alt="Ikea" className="ads" /> </Col>
                </Row>
            </Container>
        </div>
    )   
}

export default SingleProduct
