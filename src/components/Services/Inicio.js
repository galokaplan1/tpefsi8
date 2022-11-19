import React from "react";
import { useEffect } from "react";
import Cards from "../Card";
import { Container, Row,  } from 'react-bootstrap';
import '../../index.css';

const Inicio = () => {
    const [products, setProducts] = React.useState([]);
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=6`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <Container>
                <br></br>
                   <h5 className="texto">Productos destacados</h5>
                <Row>
                    { products.map(product => 
                    
                        <Cards key={product.id} props={product}  />
                    )}
                </Row>
        </Container>
    );
}

export default Inicio; 