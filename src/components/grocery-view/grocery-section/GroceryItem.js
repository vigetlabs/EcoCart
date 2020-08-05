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
  Grid,
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

const GroceryItem = ({ item, cartState, setCartState, toggleHeaderTop }) => {
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
      <Grid className={styles.item} item xs={12}>
        <Card className={styles.itemCard} container enabled elevated>
          <CardActionArea
            onClick={() => {
              toggleHeaderTop();
              openModal(setModalOpen);
            }}>
            <CardMedia
              component="img"
              alt={item}
              className={styles.cardMedia}
              image={itemData.other.imageUrl}
              title={item}
            />
            <CardContent>
              <Grid container justify="space-evenly">
                <Grid item xs={12} sm={12} md={10}>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={styles.itemTitle}>
                    {item}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                  <Typography variant="h5" className={styles.itemAmount}>
                    {cartState[item]}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing={false}>
            <Grid container justify="center">
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                className={styles.cartButtonBox}>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  size="small"
                  className={styles.cartButton}
                  onClick={handleAdd}
                  aria-label="add">
                  <AddCircleOutlineIcon fontSize="large" />
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                className={styles.cartButtonBox}>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={styles.cartButton}
                  aria-label="remove"
                  onClick={handleRemove}>
                  <RemoveCircleOutlineIcon fontSize="large" />
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
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
