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
      item
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
      <InfoSection />
      <div>
        <div
          className={styles.container}
        >
          <div
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
          </div>
        </div>
        <div>
          <Grid
            container
            direction="column"
            alignContents="flex-end"
            alignItems="stretch"
          >
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
