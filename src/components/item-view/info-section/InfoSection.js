// import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import {
  Typography,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Styles
import styles from '../styles/info-section.module.css';

const getMenuItems = (exclusiveLimit) => {
  // Get all nonzero numbers in range
  const nums = [...Array(exclusiveLimit).keys()].filter((num) => num !== 0);
  return nums.map((num) => <MenuItem value={num}>{num}</MenuItem>);
};

// REFACTOR: Actually get ingredients info
// const getIngredientsInfo = (item) => `Here are the ingredients for ${item}:.`;

// REFACTOR: Actually get serving info here
const getServingInfo = (item) => `${item} Serving Size`;

const InfoSection = ({ item, cartState, setCartState }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAdd = () => {
    const newUpdate = { ...cartState };
    newUpdate[item] += quantity;
    setCartState(newUpdate);
  };

  return (
    <>
      <Typography variant="h3">{item}</Typography>
      <Typography variant="body1">{getServingInfo(item)}</Typography>
      <div>
        <Box className={styles.dropdown}>
          <InputLabel id="label">Quantity</InputLabel>
          <Select
            labelId="label"
            id="select"
            value={quantity}
            onChange={(event) => handleChange(event)}>
            {getMenuItems(6)}
          </Select>
        </Box>
        <Button
          startIcon={<AddShoppingCartIcon />}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAdd}>
          Add To Cart
        </Button>
      </div>
      {/* <Box className={styles.ingredients}>
        <Typography variant="h5">Ingredients</Typography>
        <Typography variant="body1">{getIngredientsInfo(item)}</Typography>
      </Box> */}
    </>
  );
};

InfoSection.propTypes = {};

InfoSection.defaultProps = {};

export default InfoSection;
