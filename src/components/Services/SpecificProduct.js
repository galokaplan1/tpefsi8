import React from "react";
import { useEffect } from "react";

const SpecificProduct = (id) => {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
        .catch(err => console.error(err));
    }, []);

    return product;
}


export default SpecificProduct;