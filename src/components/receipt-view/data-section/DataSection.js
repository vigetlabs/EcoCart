// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';
import DataBreakdownAggregate from './DataBreakdownAggregate';
import ImpactDonutAggregate from './ImpactDonutAggregate';

// Styles
import styles from '../styles/data-section.module.css';

const LAND = 'land';
const WATER = 'water';
const EUTRO = 'eutro';
const GHG = 'ghg';

const colors = {
  [LAND]: 'blue',
  [WATER]: 'gold',
  [EUTRO]: 'salmon',
  [GHG]: 'green',
};

const DataSection = ({ cartState }) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSize(Math.min(window.innerHeight, window.innerWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Grid item container sm={12} spacing={1} className={styles.dataSectionBox}>
      <Grid item sm={12} className={styles.dataHeaderBox}>
        <Typography variant="h4" gutterBottom>
          Environmental Impact Breakdown
        </Typography>
      </Grid>

      <Grid
        item
        sm={6}
        className={styles.pieBox}
        style={{ minWidth: size * 0.5 }}>
        <ImpactDonutAggregate
          cartState={cartState}
          colors={colors}
          land={LAND}
          water={WATER}
          eutro={EUTRO}
          ghg={GHG}
          windowSize={size}
        />
      </Grid>

      <Grid item sm={6} className={styles.dataBreakdownBox}>
        <DataBreakdownAggregate
          cartState={cartState}
          colors={colors}
          land={LAND}
          water={WATER}
          eutro={EUTRO}
          ghg={GHG}
          windowSize={size}
        />
      </Grid>
    </Grid>
  );
};
DataSection.propTypes = {};

DataSection.defaultProps = {};

export default DataSection;
