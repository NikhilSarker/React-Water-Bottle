

const getStoredCart = ()=>{
  const storedCardString = localStorage.getItem('cart');
  if(storedCardString){
    return JSON.parse(storedCardString);

  }
  return [];
}

const savedCartLocalStorage = (cart)=>{
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringify);
}

const addToLocalStorage = (id)=> {
  const cart = getStoredCart();
  cart.push(id);
  savedCartLocalStorage(cart);
}

const removeFromLocalStorage = (id)=> {
  const cart = getStoredCart();
  const remaining = cart.filter((item_id)=> item_id !== id);
  savedCartLocalStorage(remaining);


}

export {addToLocalStorage, getStoredCart, removeFromLocalStorage};