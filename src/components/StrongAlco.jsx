import React from 'react'

const StrongAlco = (props) => {
    return ( 
        <div className='menu_beer'>
        <span>{props.name}</span>
        <span>{props.price} zł </span>
    </div>
     );
}
 
export default StrongAlco;