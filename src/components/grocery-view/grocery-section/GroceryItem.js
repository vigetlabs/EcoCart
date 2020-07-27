// import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Typography,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import ItemModal from '../../item-view/ItemModal';

// Styles
import styles from '../styles/grocery-item.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const openModal = (setModalOpen) => {
  setModalOpen(true);
};

const GroceryItem = ({
  item, cartState, setCartState, toggleHeaderTop,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const itemData = foodData[item];

  const handleAdd = () => {
    const newData = { ...cartState };
    newData[item] += 1;
    setCartState(newData);
  };

  const handleRemove = () => {
    if (cartState[item] > 0) {
      const newData = { ...cartState };
      newData[item] -= 1;
      setCartState(newData);
    }
  };

  return (
  <>
    <div className={styles.item}>
      <Card
        className={styles.itemCard}
        container
        enabled
        elevated
      >
        <CardActionArea
           onClick={() => {
             toggleHeaderTop();
             openModal(setModalOpen);
           }}
        >
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
          </CardContent>
        </CardActionArea>
          <CardActions
            disableSpacing={false}
          >
            <Button
              startIcon={<AddCircleOutlineIcon />}
              variant="contained"
              color="primary"
              size="small"
              className={styles.cartButton}
              onClick={handleAdd} />
            <Button
              startIcon={<RemoveCircleOutlineIcon />}
              variant="contained"
              color="secondary"
              size="small"
              className={styles.cartButton}
              onClick={handleRemove} />
              <Typography
                variant='h6'
              >
              {cartState[item]} Servings
              </Typography>
          </CardActions>
      </Card>
    </div>
    <ItemModal
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      item={item}
      cartState={cartState}
      setCartState={setCartState}
      toggleHeaderTop={toggleHeaderTop}
    />
  </>
  );
};

// GroceryItem.propTypes = {
// };

// GroceryItem.defaultProps = {
// };

export default GroceryItem;
