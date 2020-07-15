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

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const handleChange = (event, setQuantity) => {
  setQuantity(event.target.value);
};

// REFACTOR: Actually get ingredients info
const getIngredientsInfo = (
  item,
) => `Here are the ingredients for ${item}: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

// REFACTOR: Actually get serving info here
const getServingInfo = (item) => `${capitalize(item)} Serving Size`;

const InfoSection = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Typography variant="h3">{capitalize(item)}</Typography>
      <Typography variant="body1">{getServingInfo(item)}</Typography>
      <div>
        <Box className={styles.dropdown}>
          <InputLabel id="label">Quantity</InputLabel>
          <Select
            labelId="label"
            id="select"
            value={quantity}
            onChange={(event) => handleChange(event, setQuantity)}>
            {getMenuItems(6)}
          </Select>
        </Box>
        <Button
          startIcon={<AddShoppingCartIcon />}
          variant="contained"
          color="primary"
          size="small">
          Add To Cart
        </Button>
      </div>
      <Box className={styles.ingredients}>
        <Typography variant="h5">Ingredients</Typography>
        <Typography variant="body1">{getIngredientsInfo(item)}</Typography>
      </Box>
    </>
  );
};

InfoSection.propTypes = {};

InfoSection.defaultProps = {};

export default InfoSection;
