// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import CategoryRow from './CategoryRow';

// Styles
// import styles from '../styles/grocery-section.module.css';

const GrocerySection = () => (
  <div>
    <h1>Groceries</h1>
    <p>Here is some information about groceries</p>
    <Grid
      style={{ width: '100%' }}
      container
      direction="column"
      alignContents="flex-end"
      alignItems="stretch">
      <Grid item>
        <h2>Produce</h2>
        <CategoryRow />
      </Grid>
      <Grid item>
        <h2>Meat and Seafood</h2>
        <CategoryRow />
      </Grid>
      <Grid item>
        <h2>Bakery</h2>
        <CategoryRow />
      </Grid>
    </Grid>
  </div>
);

GrocerySection.propTypes = {};

GrocerySection.defaultProps = {};

export default GrocerySection;
