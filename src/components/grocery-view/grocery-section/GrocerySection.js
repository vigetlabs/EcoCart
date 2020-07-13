// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CategoryRow from './CategoryRow';

// Styles
// import styles from '../styles/grocery-section.module.css';
import { createMuiTheme } from '@material-ui/core/styles';

// REFACTOR: Using fake setion titles
const SECTIONS = ['Produce', 'Meat and Seafood', 'Bakery', 'Etc.'];
const GROCERY_INFO =
  'Click through product categories, view item grades, and add items to your cart straight from this page, or click an item to view more detailed information including details on its environmental impact.';

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
      <div>
        <Typography variant="h3" component="h1">
          Groceries
        </Typography>
        <Typography variant="body1" component="p">
          {GROCERY_INFO}
        </Typography>
        <Grid
          container
          direction="column"
          alignContents="flex-end"
          alignItems="stretch">
          {rows}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

GrocerySection.propTypes = {};

GrocerySection.defaultProps = {};

export default GrocerySection;
