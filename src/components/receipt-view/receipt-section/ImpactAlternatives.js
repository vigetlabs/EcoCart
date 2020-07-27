// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

// Styles
import styles from '../styles/impact-alternatives.module.css';

// Utils
import { getHighImpactItems, getAlternatives } from '../utils/calculations';
import AlternativeOptions from './AlternativeOptions';

const ImpactAlternatives = ({ cartState }) => {
  const [highImpactItems, setHighImpactItems] = useState([]);
  const [alternatives, setAlternatives] = useState({});

  useEffect(() => {
    setHighImpactItems(getHighImpactItems(cartState));
  }, [cartState]);

  useEffect(() => {
    setAlternatives(getAlternatives(highImpactItems));
  }, [highImpactItems]);

  const altComponents = highImpactItems.map((item) => (
    <AlternativeOptions
      item={item}
      alternatives={alternatives[item]}
      cartState={cartState}
    />
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
