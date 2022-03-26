import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    return (
        <div className='cart'>
            <h2>Your Cart Summary.</h2>
            <h2>Added items: {cart.length}</h2>
            {
                cart.map( item => <div className='item'><h3> {item.name}</h3></div>)
            }
        </div>
    );
};

export default Cart;