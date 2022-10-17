import { Alert, Box, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MediaCard from './reusable/Card';

const Cart = () => {
  const cart = useSelector(state => state.cart.items)
  const [isRemovingItem, setIsRemovingItem] = useState(false)

  const handleClose = () => {
    setIsRemovingItem(false)
  }

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {cart.length ? cart.map((item, index) => (
          <MediaCard storeItem={item} key={index} isInCart={true} setIsMovingItem={setIsRemovingItem}/>
        )) : <p>Cart is empty!</p>}
      </Box>
      <Snackbar open={isRemovingItem} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Item was deleted from cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Cart;