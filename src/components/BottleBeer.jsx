import React from 'react'

const BottleBeer = (props) => {
    return ( 
        <div className='menu_beer'>
            <span>{props.name}</span>
            <span>{props.price} zł </span>
        </div>
     );
}
 
export default BottleBeer;