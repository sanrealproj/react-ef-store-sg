import React from 'react';
import BodyInfo from "../components/Bodyinfo"
import productsBcg from "../images/productsBcg.jpeg"
import Products from "../components/ProductPage/Products"


const ProductPage = () => {
    return <>
    <BodyInfo img ={productsBcg}/>
    <Products/>
    </>;
}

export default ProductPage;