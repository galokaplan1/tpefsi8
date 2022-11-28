import { useContextState } from "../Context";
import CardCarrito from "../components/CardCarrito";
import { Container, Row } from "react-bootstrap";
import Marcas from "../components/Marcas";

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
          <Marcas></Marcas>
        </div>
    );
}

export default Carrito;