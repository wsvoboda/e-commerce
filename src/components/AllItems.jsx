import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreItems } from '../redux/actions';
import MediaCard from './reusable/Card';

const AllItems = () => {
  const dispatch = useDispatch()
  const storeItems = useSelector(state => state.store.items)

  useEffect(() => {
    getStoreItems(dispatch)
  }, [dispatch])

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {!!storeItems.length && storeItems.map((item, index) => (
          <MediaCard storeItem={item} key={index} />
        ))}
      </Box>
    </div>
  );
}

export default AllItems;