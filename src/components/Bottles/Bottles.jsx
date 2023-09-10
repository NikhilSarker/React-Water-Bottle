// import PropTypes from 'prop-types'; 
import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from '../../utilities/LocalStorage';
import Cart from '../Cart/Cart';


const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const URL =`bottles.json`;
        const response = await fetch(URL);
        const bottlesData = await response.json();
        // console.log(bottlesData);
        setBottles(bottlesData)

      }
      fetchData();
      
    } catch (error) {
      console.log(error);
      
    }
  }, [])

// Load cart from Local Storage

useEffect(()=>{
  if(bottles.length){
    const storedCart = getStoredCart();
    const savedCart =[];
    for(const id of storedCart){
      const bottle = bottles.find((bottle)=> bottle.id === id);
      if (bottle) {
        savedCart.push(bottle);
               
      }
    }

    setCart(savedCart);
  }
}, [bottles])


  const handlePurchase = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id)
  }

  const handleRemoveFromCart = (id)=>{
    const remainingCart = cart.filter((bottle)=> bottle.id !==id);
    setCart(remainingCart);

    removeFromLocalStorage(id);
  }

  return (
    <div>
      <h3> Available Bottles: {bottles.length} Pcs.</h3>
      <Cart cart={cart}
     handleRemoveFromCart={handleRemoveFromCart}
     ></Cart>
    
      <div className='grid grid-cols-3 gap-4'>
      {
        bottles && bottles.map((bottle) => <Bottle 
        key={bottle.id}
        bottle={bottle}
        handlePurchase={handlePurchase}

        ></Bottle>)
      }
      </div>      
    </div>
  );
};

Bottles.propTypes = {
  // bottles:PropTypes.array.isRequired
}
export default Bottles;