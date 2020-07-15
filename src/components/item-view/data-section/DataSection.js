// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';
// import DataBreakdown from './DataBreakdown';
import ImpactDonut from './ImpactDonut';

// Styles
import styles from '../styles/data-section.module.css';
import DataBreakdown from './DataBreakdown';

const DataSection = ({ item }) => (
  <Grid container justify="center">
    <Grid item className={styles.square}>
      <Typography variant="h5" className={styles.envImpact}>
        Environmental Impact
      </Typography>
      <ImpactDonut item={item} />
    </Grid>
    <Grid item className={styles.square}>
      <DataBreakdown item={item} />
    </Grid>
  </Grid>
);

DataSection.propTypes = {};

DataSection.defaultProps = {};

export default DataSection;
