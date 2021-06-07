export const addItemToCart = (cartItems, itemToAdd) => {
  const existItem = cartItems.find(item => item.id === itemToAdd.id);

  if(existItem){
    return cartItems.map(item => item.id === itemToAdd.id ? 
      { ...item, quantity: item.quantity + 1 } 
      : item 
    );
  }

  return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeCartItem = (cartItems, itemToRemove) => {
  const existItem = cartItems.find(item => item.id === itemToRemove.id);

  if(existItem.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id)
  }

  return cartItems.map(item => 
    item.id === itemToRemove.id ? 
      {...item, quantity: itemToRemove.quantity - 1}
    : item
  )
}