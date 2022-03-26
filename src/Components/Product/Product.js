import React from 'react';
import {useEffect,useState} from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import './Product.css';

const Product = () => {
    const [bikes, setBikes] = useState([]);
    const [cart, setCart] =useState([]);
    useEffect(()=>{
    fetch('data.json')
    .then( res => res.json())
    .then( data =>setBikes(data))
  },[])

    const addToCart = (bike) => {
        console.log(bike);
        const newCart = [...cart,bike];
        setCart(newCart);
    }
    return (
        <div className='product-container'>
            <div className='bike-container'>
               {
                   bikes.map( bike => <Bike 
                    key={bike.id} 
                    bike={bike}
                    addToCart={addToCart}
                    ></Bike>)
               }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Product;