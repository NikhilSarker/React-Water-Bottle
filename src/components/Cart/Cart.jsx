import PropTypes from 'prop-types'; 

const Cart = ({cart, handleRemoveFromCart}) => {

  return (
    <div>
       <h3> Cart: {cart.length} Pcs.</h3>
       <div className=' grid grid-cols-8'>
        {
          cart.map((bottle)=> <div  key={bottle.id}>
            <img src={bottle.img}/>
            <button className='btn' onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>)
        }
       </div>
      
    </div>
  );
};
Cart.propTypes = {
  cart:PropTypes.array.isRequired,
  handleRemoveFromCart:PropTypes.func.isRequired
}
export default Cart;