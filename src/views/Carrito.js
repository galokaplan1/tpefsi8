import { useContextState } from "../Context";
import CardCarrito from "../components/CardCarrito";
import { Container, Row, Col } from "react-bootstrap";
import delta from '../images/delta.png';
import ferrum from '../images/ferrum.png';
import logoips from '../images/logo_ips.png';
import tigre from '../images/tigre.png';

const Carrito = () => {
    const {contextState, setContextState} = useContextState();
    return (
        <div>
            <Container>
                    <div>
                        <h1>Carrito</h1>
                        {contextState.product.length === 0 ? (
                            <h2>No hay productos en el carrito</h2>
                        ) : (
                            <Row>
                                { contextState.product.map(product => <CardCarrito key={product.id} product={product} />) }
                            </Row>
                        )}
                    </div>
            </Container>
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
    );
}

export default Carrito;