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
                cart.map( item => <div className='item'><h3 key={item.id}> {item.name}</h3></div>)
            }
            <button className='choose-one'>
                <p>Choose One For Me</p>
            </button>
            <br></br>
            <button className='choose-again'>
                <p>Choose Again</p>
            </button>
        </div>
    );
};

export default Cart;