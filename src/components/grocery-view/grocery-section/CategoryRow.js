// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Typography, Grid } from '@material-ui/core';
import GroceryItem from './GroceryItem';

// Styles
import styles from '../styles/category-row.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const CategoryRow = ({
  category, cartState, setCartState, toggleHeaderTop,
}) => {
  const groceryItems = Object.keys(cartState).map((itemKey) => {
    if (foodData[itemKey].other.category.includes(category)) {
      return (
        <Grid
          item
          xl={2}
        >
          <GroceryItem
            cartState={cartState}
            setCartState={setCartState}
            key={itemKey}
            item={itemKey}
            toggleHeaderTop={toggleHeaderTop}
          />
        </Grid>
      );
    }
    return null;
  }).filter((isNotNull) => isNotNull);

  return (
    <Grid
      container
      className={styles.container}
      justify='left'
    >
      <Grid
        item
        xs={12}
      >
        <Typography
          variant="h2"
          className={styles.categoryHeader}
        >
          {category}
        </Typography>
      </Grid>
      {groceryItems}
    </Grid>
  );
};

CategoryRow.propTypes = {};

CategoryRow.defaultProps = {};

export default CategoryRow;
