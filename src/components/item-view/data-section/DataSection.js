// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import DataBreakdown from './DataBreakdown';
import ImpactRadar from './ImpactRadar';
import ItemGrade from './ItemGrade';

// Styles
import styles from '../styles/data-section.module.css';

const DataSection = ({ item }) => (
  <Grid
    container
    justify="center"
  >
    <Grid
      item
      container
      className={styles.square}
      sm={12}
    >
      <Grid
        item
        container
        className={styles.square}
        sm={6}
      >
        <Grid
          item
          container
          sm={12}
        >
          <ImpactRadar item={item} />
        </Grid>
        <Grid
          item
          sm={12}
        >
          <ItemGrade item={item} />
        </Grid>
      </Grid>
      <Grid
        item
        className={styles.breakdownBox}
        sm={6}
      >
        <DataBreakdown item={item} />
      </Grid>
    </Grid>
  </Grid>
);

DataSection.propTypes = {};

DataSection.defaultProps = {};

export default DataSection;
