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

const GrocerySection = ({ cartState, setCartState, toggleHeaderTop }) => {
  const rows = categories.map((section, index) => (
    <Grid
      container
      item
      justify='center'
      className={`${styles.rowBox} ${index % 2 === 0 ? null : styles.rowBoxGrey}`}
    >
       <CategoryRow
        key={section}
        cartState={cartState}
        setCartState={setCartState}
        category={section}
        toggleHeaderTop={toggleHeaderTop}
      />
    </Grid>
  ));

  return (
    <>
      <Grid
        container
        justify='center'
      >
        <Grid
          item
          container
          xs={12}
        >
          <InfoSection />
          <Grid
            item
            xs={12}
            className={styles.instructions}
          >
            <Typography
              variant="h5"
              component="p"
              id='groceries'
              className={styles.instructionsText}
            >
              {GROCERY_INFO}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify='center'
        >
          {rows}
        </Grid>
      </Grid>
    </>
  );
};

GrocerySection.propTypes = {};

GrocerySection.defaultProps = {};

export default GrocerySection;
