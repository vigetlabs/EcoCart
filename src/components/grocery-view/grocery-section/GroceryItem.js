// import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ItemModal from '../../item-view/ItemModal';

// Styles
import styles from '../styles/grocery-item.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const openModal = (setModalOpen) => {
  setModalOpen(true);
};

const GroceryItem = ({ item, cartState, setCartState }) => {
  const itemData = foodData[item];

  const handleAdd = () => {
    const newData = { ...cartState };
    newData[item] += 1;
    setCartState(newData);
  };

  return (
  <> 
    <div className={styles.item}>
      <Card className={styles.itemCard} container elevated enabled>
        <CardMedia
          component="img"
          alt={item}
          height="240"
          image={itemData.other.imageUrl}
          title={item}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {item}
          </Typography>
          <Button
            variant="text"
            size="small"
            endIcon={<ChevronRightIcon />}
            onClick={() => openModal(setModalOpen)}>
            View Details
          </Button>
            View Details
          </Button>
        </CardContent>
        <CardActions disableSpacing={true}>
          <Button
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
            color="primary"
            size="small"
            className={styles.cartButton}
            onClick={handleAdd}>
            {cartState[item]}
          </Button>
        </CardActions>
      </Card>
    </div>
    <ItemModal
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      item={item}
    />
  </>
  );
};

// GroceryItem.propTypes = {
// };

// GroceryItem.defaultProps = {
// };

export default GroceryItem;
