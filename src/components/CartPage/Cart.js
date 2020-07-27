import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';



const Cart = () => {
    return <div>
        Cart
        <CartColumns/>
        <CartList/>
        <CartTotals/>

    </div>;
}



export default Cart;