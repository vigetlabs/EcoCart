// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';
import DataBreakdownAggregate from './DataBreakdownAggregate';
import ImpactDonutAggregate from './ImpactDonutAggregate';

// Styles
import styles from '../styles/data-section.module.css';

const DataSection = ({ cartState }) => (
  <Grid item container sm={12} spacing={4} className={styles.dataSectionBox}>
    <Grid item sm={12} className={styles.dataHeaderBox}>
      <Typography variant="h4" gutterBottom>
        Environmental Impact Breakdown
      </Typography>
    </Grid>

    <Grid item sm={6} className={styles.donutBox}>
      <ImpactDonutAggregate cartState={cartState} />
    </Grid>

    <Grid item sm={6} className={styles.dataBreakdownBox}>
      <DataBreakdownAggregate cartState={cartState} />
    </Grid>
  </Grid>
);

DataSection.propTypes = {};

DataSection.defaultProps = {};

export default DataSection;
