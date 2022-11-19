import React from "react";
import Slider from "../components/Slider";
import Inicio from "../components/Services/Inicio";
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';
import delta from '../images/delta.png';
import ferrum from '../images/ferrum.png';
import logoips from '../images/logo_ips.png';
import tigre from '../images/tigre.png';

const Home = () => {
    return (
        <div>
            <Slider />
            <Container>
                <Inicio />
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

export default Home;