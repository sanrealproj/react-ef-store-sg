import React from 'react';
import CartSection from '../components/CartPage';
import BodyInfo from '../components/Bodyinfo';
import cartBcg from "../images/storeBcg.jpeg";
const CartPage = () => {
    return <>
        <BodyInfo img ={cartBcg} />
        <CartSection/>
    </>;
}



export default CartPage;