import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

// Styles
import styles from '../styles/impact-alternatives.module.css';

const ImpactAlternatives = () => (
  <Grid
    item
    container
    sm={12}
    className={styles.alternativesGrid}
  >
    <Typography
      variant="h6"
      gutterBottom>
        Impact Alternatives
    </Typography>
  </Grid>
);

ImpactAlternatives.propTypes = {
};

ImpactAlternatives.defaultProps = {
};

export default ImpactAlternatives;
