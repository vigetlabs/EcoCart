// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// Components
import { Grid } from '@material-ui/core';
import DataBreakdown from './DataBreakdown';
import ImpactRadar from './ImpactRadar';
import ItemGrade from './ItemGrade';

// Styles
import styles from '../styles/data-section.module.css';

// Vars
const LAND = 'land';
const WATER = 'water';
const EUTRO = 'eutro';
const GHG = 'ghg';

const minRatio = { title: 0.2, body: 0.3 };

const DataSection = ({ item }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        min: Math.min(window.innerWidth, window.innerHeight),
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width, min } = windowDimensions;

  const ratio = width - min / width;

  return (
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
          <ImpactRadar
            item={item}
            ratio={ratio}
          />
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
        <DataBreakdown
          item={item}
          land={LAND}
          water={WATER}
          eutro={EUTRO}
          ghg={GHG}
          windowDimensions={windowDimensions}
          minRatio={minRatio}
        />
      </Grid>
    </Grid>
  </Grid>
  );
};

DataSection.propTypes = {};

DataSection.defaultProps = {};

export default DataSection;
