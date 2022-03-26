import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Bike.css';

const Bike = (props) => {
    // console.log(props);
    const {addToCart} = props;
    const{id,img,name,price} = props.bike;
    return (
        <div className='bike'>
            <img src={img} alt="" />
            <h3 className='bike-name'>Name: {name}</h3>
            <h4 className='bike-price'>Price: {price}</h4>
            <button onClick={() => addToCart(props.bike)} className='cart-btn'>
                <p className='cart-text'>Add To Cart</p><FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Bike;