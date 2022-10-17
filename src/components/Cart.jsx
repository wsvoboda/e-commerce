import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import MediaCard from './reusable/Card';

const Cart = () => {
  const cart = useSelector(state => state.cart.items)

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {cart.length ? cart.map((item, index) => (
          <MediaCard storeItem={item} key={index} isInCart={true} />
        )) : <p>Cart is empty!</p>}
      </Box>
    </div>
  );
}

export default Cart;