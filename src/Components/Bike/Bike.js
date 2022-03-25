import React from 'react';
import './Bike.css';

const Bike = (props) => {
    console.log(props);
    const{id,img,name,price} = props.bike;
    return (
        <div className='bike'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
        </div>
    );
};

export default Bike;