// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography, ThemeProvider, IconButton } from '@material-ui/core';
import CategoryRow from './CategoryRow';
import InfoSection from '../info-section/InfoSection';

// Styles
import styles from '../styles/grocery-section.module.css';
import { createMuiTheme } from '@material-ui/core/styles';

// REFACTOR: Using fake setion titles
const SECTIONS = ['Produce', 'Meat and Seafood', 'Bakery', 'Etc.'];
const GROCERY_INFO =
  'Click through product categories, view item grades, and add items to your cart straight from this page, or click an item to view more detailed information including details on its environmental impact.';

const scroll = (setStartIndex) => {};

const GrocerySection = () => {
  // REFACTOR: Update for actual data
  const rows = SECTIONS.map((section) => (
    <Grid item>
      <CategoryRow category={section} />
    </Grid>
  ));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#43a047',
        contrastText: '#FFFFFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <InfoSection />
      <div>
        <div className={styles.container}>
          <Typography variant="h3" component="h1">
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
    </ThemeProvider>
  );
};

GrocerySection.propTypes = {};

GrocerySection.defaultProps = {};

export default GrocerySection;
