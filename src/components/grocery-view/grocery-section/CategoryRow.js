// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import GroceryItem from './GroceryItem';

// Styles
import styles from '../styles/category-row.module.css';

const CategoryRow = () => {
  const groceryItems = [1, 2, 3, 4, 5, 6].map((index) => (
    <Grid item>
      <GroceryItem key={index} />
    </Grid>
  ));
  return <div className={styles.row}>{groceryItems}</div>;
};

CategoryRow.propTypes = {};

CategoryRow.defaultProps = {};

export default CategoryRow;
