import React from 'react'

const NoAlco = (props) => {
    return (
        <div className='menu_beer'>
        <span>{props.name}</span>
        <span>{props.price} zł </span>
    </div> 
      );
}
 
export default NoAlco;