import PropTypes from 'prop-types';
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

const minRatio = { title: 0.2, body: 0.3 };

const DataSection = ({ cartState }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window) {
        setWindowDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
          min: Math.min(window.innerWidth, window.innerHeight),
        });
      }
    };

    handleResize();
    if (window) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (window) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const { width, min } = windowDimensions;

  const ratio = width - min / width;

  return (
    <Grid
      item
      container
      alignItems="center"
      sm={ratio >= minRatio.body ? 12 : 10}
      spacing={1}
      className={styles.dataSectionBox}>
      <Grid
        item
        sm={(width - min) / width >= minRatio.body ? 12 : 10}
        className={styles.dataHeaderBox}>
        <Typography variant="h4" gutterBottom>
          Environmental Impact Breakdown
        </Typography>
      </Grid>

      <Grid
        item
        sm={6}
        className={styles.pieBox}
        style={{ minWidth: windowDimensions.min * 0.5 }}>
        <ImpactDonutAggregate
          cartState={cartState}
          colors={colors}
          land={LAND}
          water={WATER}
          eutro={EUTRO}
          ghg={GHG}
          windowDimensions={windowDimensions}
        />
      </Grid>

      <Grid
        item
        sm={(width - min) / width >= minRatio.body ? 6 : 4}
        className={styles.dataBreakdownBox}>
        <DataBreakdownAggregate
          cartState={cartState}
          colors={colors}
          land={LAND}
          water={WATER}
          eutro={EUTRO}
          ghg={GHG}
          windowDimensions={windowDimensions}
          minRatio={minRatio}
        />
      </Grid>
    </Grid>
  );
};
DataSection.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.number),
};

DataSection.defaultProps = {};

export default DataSection;
