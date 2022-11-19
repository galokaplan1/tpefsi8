import React from "react";
import { useEffect } from "react";
import Cards from "../Card";
import { Container, Row,} from 'react-bootstrap';
import '../../index.css';

const Products = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <Container>
                <br></br>
                   <h5 className="texto">Nuestros Productos</h5>
                <Row>
                    { products.map(product => <Cards key={product.id} props={product} />) }
                </Row>
        </Container>
    );
}

export default Products;


