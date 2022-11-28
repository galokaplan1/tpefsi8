import { useParams } from "react-router-dom"
import SpecificProduct from "../components/Services/SpecificProduct"
import Button from 'react-bootstrap/Button';
import '../index.css';
import { ActionTypes, useContextState } from "../Context";
import Marcas from "../components/Marcas";

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
            <Marcas></Marcas>
        </div>
    )   
}

export default SingleProduct
