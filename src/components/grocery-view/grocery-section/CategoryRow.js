// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import GroceryItem from './GroceryItem';

// Styles
import styles from '../styles/category-row.module.css';

// REFACTOR: Use real data here
const ITEMS = ['broccoli', 'corn', 'bread', 'milk', 'beef', 'cheese'];

const CategoryRow = ({ category }) => {
  // REFACTOR: Using fake data right now
  const groceryItems = ITEMS.map((item) => (
    <Grid item>
      <GroceryItem key={item} item={item} />
    </Grid>
  ));
  return (
    <div>
      <h2>{category}</h2>
      <div className={styles.row}>{groceryItems}</div>
    </div>
  );
};

CategoryRow.propTypes = {};

CategoryRow.defaultProps = {};

export default CategoryRow;
