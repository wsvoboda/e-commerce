import { Alert, Box, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreItems } from '../redux/actions';
import MediaCard from './reusable/Card';

const AllItems = () => {
  const dispatch = useDispatch()
  const storeItems = useSelector(state => state.store.items)
  const [isAddingItem, setIsAddingItem] = useState(false)

  const handleClose = () => {
    setIsAddingItem(false)
  }

  useEffect(() => {
    getStoreItems(dispatch)
  }, [dispatch])

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {!!storeItems.length && storeItems.map((item, index) => (
          <MediaCard storeItem={item} key={index} setIsMovingItem={setIsAddingItem}/>
        ))}
      </Box>
      <Snackbar open={isAddingItem} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Item was added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AllItems;