// import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  MenuItem,
  Select,
  InputLabel,
  Button,
  Box,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ItemModal from '../item-view/ItemModal';
import LetterGrade from '../LetterGrade';

// Styles
import styles from './styles/cart-item.module.css';

// Data
import foodData from '../../../content/food-data.json';

// Functions
const getMenuItems = (exclusiveLimit) => {
  // Get all nonzero numbers in range
  const nums = [...Array(exclusiveLimit).keys()].filter((num) => num !== 0);
  return nums.map((num) => <MenuItem value={num}>{num}</MenuItem>);
};

const openModal = (setModalOpen) => {
  setModalOpen(true);
};

const CartItem = ({
  name, cartState, setCartState, toggleHeaderTop,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const foodItem = foodData[name];

  const amount = cartState[name];

  const deleteItem = () => {
    const newData = { ...cartState };
    newData[name] = 0;
    setCartState(newData);
  };

  const handleSelect = (e) => {
    const newData = { ...cartState };
    newData[name] = e.target.value;
    setCartState(newData);
  };

  return (
    <>
      <Card
        className={styles.listItemCard}
      >
        <CardContent>
          <Grid
            container
          >
            <Grid
              item
              xs={4}
            >
            <img
              src={foodItem.other.imageUrl}
              alt={name}
              className={styles.image}
            />
            </Grid>
              <Grid
                item
                container
                xs={8}
              >
                <Grid
                  item
                  xs={8}
                >
                  <Grid
                    item
                    xs={12}
                  >
                    <Typography
                      variant='h5'
                    >
                      {name}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                  >
                    <InputLabel
                      id="Quantity"
                      className={styles.catLabel}
                    >
                      <label for="Quantity">Quantity</label>
                    </InputLabel>
                    <Select
                      label='Quantity'
                      labelId="Quantity"
                      id="select"
                      size='small'
                      value={amount}
                      className={styles.cartSelect}
                      onChange={(event) => handleSelect(event)}>
                      {getMenuItems((amount * 3))}
                    </Select>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                  >
                    <Button
                      variant='h5'
                      onClick={() => {
                        openModal(setIsModalOpen);
                      }}
                    >
                      More Info
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <CardActions>
                  <LetterGrade grade={foodData[name].ecoScore.grade}/>
                    <Button
                      onClick={deleteItem}
                    >
                      <HighlightOffIcon
                        className={styles.deleteBtn}
                        fontSize='large'
                      />
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
          </Grid>
        </CardContent>
    </Card>
    <ItemModal
      isModalOpen={isModalOpen}
      setModalOpen={setIsModalOpen}
      item={name}
      cartState={cartState}
      setCartState={setCartState}
      toggleHeaderTop={toggleHeaderTop}
    />
  </>
  );
};

CartItem.propTypes = {
};

CartItem.defaultProps = {
};

export default CartItem;
