// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography, IconButton } from '@material-ui/core';
import { Link } from 'gatsby';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CategoryRow from './CategoryRow';
import InfoSection from '../info-section/InfoSection';

// Styles
import styles from '../styles/grocery-section.module.css';

// Data
import { categories } from '../../../../content/food-categories.json';

const chevronButton = {
  width: 100,
  height: 100,
  padding: 10,
  fontSize: 60,
};

const GROCERY_INFO = `Scroll down to see and add items to your list. Click an item to see its environmental impact breakdown. Review your list and click “View Impact” to see your Impact Receipt.
`;

const GrocerySection = ({ cartState, setCartState, toggleHeaderTop }) => {
  const rows = categories.map((section, index) => (
    <Grid
      container
      item
      justify="center"
      className={`${styles.rowBox} ${
        index % 2 === 0 ? null : styles.rowBoxGrey
      }`}>
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
      <Grid container justify="center">
        <Grid item container xs={12}>
          <InfoSection />
          <Grid item xs={12} id="groceries" className={styles.chevron}>
            <Link
              to="/#groceries"
              aria-label="scroll down"
              className={styles.link}>
              <IconButton aria-label="scroll down" style={chevronButton}>
                <KeyboardArrowDownIcon style={{ fontSize: 130 }} />
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={12} className={styles.instructions}>
            <Typography
              variant="h5"
              component="p"
              className={styles.instructionsText}>
              {GROCERY_INFO}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="center">
          {rows}
        </Grid>
      </Grid>
    </>
  );
};

GrocerySection.propTypes = {};

GrocerySection.defaultProps = {};

export default GrocerySection;
