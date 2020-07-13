import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import DataBreakdownAggregate from './DataBreakdownAggregate';
import ImpactDonutAggregate from './ImpactDonutAggregate';

// Styles
import styles from '../styles/data-section.module.css';

const DataSection = () => (
    <Grid
      item
      sm={12}
      className={styles.dataSectionGrid}
    >
      DataSection
    </Grid>
);

DataSection.propTypes = {
};

DataSection.defaultProps = {
};

export default DataSection;
