import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/cartSlice';

export default function MediaCard({ storeItem, isInCart = false }) {
  const dispatch = useDispatch()
  const allItems = useSelector(state => state.store.items)

  const addItemToCart = (itemId) => {
    const individualItem = allItems.find(item => item.id === itemId)
    dispatch(addItem(individualItem))
  }

  const removeItemFromCart = (itemId) => {
    dispatch(removeItem(itemId))
  }

  return (
    <Card sx={{ maxWidth: 300, mr: 3, mb: 3 }}>
      <CardMedia
        component="img"
        height="300"
        image={storeItem.image}
        alt="shop item"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {storeItem.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {storeItem.description}
        </Typography>
      </CardContent>
      {isInCart && <Typography sx={{ml: 2}}>Qty: {storeItem.qty}</Typography>}
      <CardActions>
        {!isInCart && <Button size="small" onClick={() => addItemToCart(storeItem.id)}>Add to Cart</Button>}
        {isInCart && <Button size="small" onClick={() => removeItemFromCart(storeItem.id)}>Remove from Cart</Button>}
      </CardActions>
    </Card>
  );
}
