// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  Grid, Typography,
} from '@material-ui/core';
import CategoryRow from './CategoryRow';
import InfoSection from '../info-section/InfoSection';

// Styles
import styles from '../styles/grocery-section.module.css';

// Data
import { categories } from '../../../../content/food-categories.json';

const GROCERY_INFO = `Click through product categories, view item grades,
                      and add items to your cart straight from this page,
                      or click an item to view more detailed information
                      including details on its environmental impact.`;

const GrocerySection = ({ cartState, setCartState }) => {
  const rows = categories.map((section) => (
    <Grid item>
      <CategoryRow cartState={cartState} setCartState={setCartState} category={section} />
    </Grid>
  ));

  return (
    <>
      <InfoSection />
      <div>
        <div
          className={styles.container}
        >
          <Typography
            variant="h3"
            component="h1"
            id='groceries'
          >
            Groceries
          </Typography>
          <Typography variant="body1" component="p">
            {GROCERY_INFO}
          </Typography>
        </div>
        <div>
          <Grid
            container
            direction="column"
            alignContents="flex-end"
            alignItems="stretch">
            {rows}
          </Grid>
        </div>
      </div>
    </>
  );
};

GrocerySection.propTypes = {};

GrocerySection.defaultProps = {};

export default GrocerySection;
