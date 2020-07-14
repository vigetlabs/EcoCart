// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

// Styles
import styles from '../styles/impact-alternatives.module.css';

const ImpactAlternatives = () => (
  <Grid
    item
    sm={12}
    className={styles.alternativesBox}
  >
    <Typography
      variant="h4"
      gutterBottom>
        High Impact Alternatives
    </Typography>
  </Grid>
);

ImpactAlternatives.propTypes = {
};

ImpactAlternatives.defaultProps = {
};

export default ImpactAlternatives;
