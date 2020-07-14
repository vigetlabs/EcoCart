// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';
import DataBreakdownAggregate from './DataBreakdownAggregate';
import ImpactDonutAggregate from './ImpactDonutAggregate';

// Styles
import styles from '../styles/data-section.module.css';

const DataSection = () => (
    <Grid
      item
      container
      sm={12}
      spacing={4}
      className={styles.dataSectionBox}
    >

      <Grid
        item
        sm={12}
        className={styles.dataHeaderBox}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          Environmental Impact Breakdown
        </Typography>
      </Grid>

      <Grid
        item
        sm={6}
        className={styles.donutBox}
      >
        <ImpactDonutAggregate />
      </Grid>

      <Grid
        item
        sm={6}
        className={styles.dataBreakdownBox}
      >
        <DataBreakdownAggregate />
      </Grid>

    </Grid>
);

DataSection.propTypes = {
};

DataSection.defaultProps = {
};

export default DataSection;
