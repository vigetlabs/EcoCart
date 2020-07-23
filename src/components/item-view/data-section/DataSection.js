// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
// import DataBreakdown from './DataBreakdown';
import ImpactRadar from './ImpactRadar';

// Styles
import styles from '../styles/data-section.module.css';
import DataBreakdown from './DataBreakdown';

const DataSection = ({ item }) => (
  <Grid container justify="center">
    <Grid item className={styles.square}>
      <ImpactRadar item={item} />
    </Grid>
    <Grid item className={styles.square}>
      <DataBreakdown item={item} />
    </Grid>
  </Grid>
);

DataSection.propTypes = {};

DataSection.defaultProps = {};

export default DataSection;
