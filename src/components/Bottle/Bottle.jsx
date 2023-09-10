import PropTypes from 'prop-types'; 
// import React from 'react';

const Bottle = ({bottle, handlePurchase}) => {
  // console.log(bottle);
  const {name, price, ratings, img} = bottle;
  return (
    <div className='border-2 border-purple-600 rounded-xl m-5 p-4'>
      <img className='inline w-[300px]'  src={img} alt="" />
      <h3>Bottle Name: {name}</h3>
      <h3>Bottle Price: ${price}</h3>
      <h3>Bottle Rating: {ratings}</h3>
      <button onClick={()=>handlePurchase(bottle)} className='btn'>Add to Cart</button>
      
    </div>
  );
};


Bottle.propTypes = {
  bottle:PropTypes.object.isRequired,
  handlePurchase:PropTypes.func.isRequired
}
export default Bottle;