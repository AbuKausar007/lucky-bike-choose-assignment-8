import React from 'react';
import {useEffect,useState} from 'react';
import Bike from '../Bike/Bike';

const Product = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
    fetch('data.json')
    .then( res => res.json())
    .then( data =>setBikes(data))
  },[])
    return (
        <div>
            <h1>Colletct Your Collest Bike!</h1>
            {
                bikes.map( bike => <Bike key={bike.id} bike={bike}></Bike>)
            }
        </div>
    );
};

export default Product;