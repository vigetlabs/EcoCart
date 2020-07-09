// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import CategoryRow from './CategoryRow';

// Styles
// import styles from '../styles/grocery-section.module.css';

// REFACTOR: Using fake setion titles
const SECTIONS = ['Produce', 'Meat and Seafood', 'Bakery', 'Etc.'];
const GROCERY_INFO = 'Here is some information about groceries';

const GrocerySection = () => {
  // REFACTOR: Update for actual data
  const rows = SECTIONS.map((section) => (
    <Grid item>
      <CategoryRow category={section} />
    </Grid>
  ));
  return (
    <div>
      <h1>Groceries</h1>
      <p>{GROCERY_INFO}</p>
      <Grid
        container
        direction="column"
        alignContents="flex-end"
        alignItems="stretch">
        {rows}
      </Grid>
    </div>
  );
};

GrocerySection.propTypes = {};

GrocerySection.defaultProps = {};

export default GrocerySection;
