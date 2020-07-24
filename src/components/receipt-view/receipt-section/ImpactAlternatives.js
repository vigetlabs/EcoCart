// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

// Styles
import styles from '../styles/impact-alternatives.module.css';

// Utils
import { getHighImpactItems, getAlternatives } from '../utils/calculations';

const ImpactAlternatives = ({ cartState }) => {
  const items = getHighImpactItems(cartState);
  const alternatives = getAlternatives(items);
  const altComponents = Object.keys(alternatives).map((item) => (
    <Typography variant="body1">{`${item} -> ${
      alternatives[item].length ? alternatives[item] : 'No alternatives yet!'
    }`}</Typography>
  ));

  return (
    <Grid
      item
      container
      direction="column"
      sm={12}
      className={styles.alternativesBox}>
      <Grid item sm={12}>
        <Typography variant="h4" gutterBottom>
          Alternatives to High Impact Foods
        </Typography>
        {altComponents}
      </Grid>
    </Grid>
  );
};

ImpactAlternatives.propTypes = {};

ImpactAlternatives.defaultProps = {};

export default ImpactAlternatives;
