import React from 'react'

const Wins = (props) => {
    return (
        <div className='menu_beer'>
        <span>{props.name}</span>
        <span>{props.price} zł </span>
    </div>
      );
}
 
export default Wins;