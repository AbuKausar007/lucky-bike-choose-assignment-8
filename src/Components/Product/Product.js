import React from 'react';
import {useEffect,useState} from 'react';
import Bike from '../Bike/Bike';
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
                <h2>cart container</h2>
            </div>
        </div>
    );
};

export default Product;