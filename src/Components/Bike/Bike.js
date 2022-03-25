import React from 'react';

const Bike = (props) => {
    console.log(props);
    const{id,img,name,price} = props.bike;
    return (
        <div>
            <img src={img} alt="" />
            <p>Id: {id}</p>
            <h1>Name: {name}</h1>
            <h2>Price: {price}</h2>
        </div>
    );
};

export default Bike;