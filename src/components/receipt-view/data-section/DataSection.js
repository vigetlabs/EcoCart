import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// Components
import { Grid, Typography, Box } from '@material-ui/core';
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
      if (typeof window) {
        setWindowDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
          min: Math.min(window.innerWidth, window.innerHeight),
        });
      }
    };

    handleResize();
    if (typeof window) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const { width, height } = windowDimensions;
  const sizeXs = Math.min(width, height / 2);
  const sizeMd = Math.min(width / 2, height);

  return (
    <Grid
      item
      container
      alignItems="center"
      justify="center"
      xs={12}
      spacing={1}
      className={styles.dataSectionBox}>
      <Grid item xs={12} className={styles.dataHeaderBox}>
        <Typography variant="h4" gutterBottom>
          Environmental Impact Breakdown
        </Typography>
      </Grid>

      <Box display={{ xs: 'none', md: 'flex' }}>
        <Grid
          item
          md={6}
          className={styles.pieBox}
          style={{ minWidth: sizeMd * 0.7 }}>
          <ImpactDonutAggregate
            cartState={cartState}
            colors={colors}
            land={LAND}
            water={WATER}
            eutro={EUTRO}
            ghg={GHG}
            size={sizeMd}
          />
        </Grid>
      </Box>

      <Box display={{ xs: 'flex', md: 'none' }}>
        <Grid
          item
          xs={12}
          className={styles.pieBox}
          style={{ minWidth: sizeXs * 0.7 }}>
          <ImpactDonutAggregate
            cartState={cartState}
            colors={colors}
            land={LAND}
            water={WATER}
            eutro={EUTRO}
            ghg={GHG}
            size={sizeXs}
          />
        </Grid>
      </Box>

      <Grid item xs={12} md={6} className={styles.dataBreakdownBox}>
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
