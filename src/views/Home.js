import React from "react";
import Slider from "../components/Slider";
import Inicio from "../components/Services/Inicio";
import { Container } from 'react-bootstrap';
import '../index.css';
import Marcas from "../components/Marcas";

const Home = () => {
    return (
        <div>
            <Slider />
            <Container>
                <Inicio />
            </Container>
            <hr className="espacio" />
            <Marcas>

            </Marcas>
        </div>
    );
}

export default Home;