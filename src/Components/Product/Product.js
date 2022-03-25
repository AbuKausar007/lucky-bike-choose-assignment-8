import React from 'react';
import {useEffect,useState} from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import './Product.css';

const Product = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
    fetch('data.json')
    .then( res => res.json())
    .then( data =>setBikes(data))
  },[])
    return (
        <div className='product-container'>
            <div className='bike-container'>
               {
                   bikes.map( bike => <Bike key={bike.id} bike={bike}></Bike>)
               }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Product;