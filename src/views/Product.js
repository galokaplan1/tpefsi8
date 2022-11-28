import { useParams } from "react-router-dom"
import SpecificProduct from "../components/Services/SpecificProduct"
import Button from 'react-bootstrap/Button';
import '../index.css';
import { ActionTypes, useContextState } from "../Context";
import Marcas from "../components/Marcas";
import Cards from "../components/Card";

const SingleProduct = () => {
    const {contextState, setContextState} = useContextState() 
    const { id } = useParams()
    const Product=SpecificProduct(id)
    const existe = contextState.product.find(item => item.id === Product.id)
    return(
        <div>
            <Cards props={Product}></Cards>
            {
                existe ? (
                    <Button variant="danger" onClick={() => setContextState({type: ActionTypes.SetEliminarId, value: Product.id})}> Eliminar del carrito</Button>
                ) : (
                    <Button variant="success" onClick={() => setContextState({type: ActionTypes.SetProduct, value: Product})}> Agregar al carrito</Button>
                )
            }
            
            <hr className="espacio" />
            <Marcas></Marcas>
        </div>
    )   
}

export default SingleProduct
