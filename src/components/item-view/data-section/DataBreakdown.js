// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

// Styles
import styles from '../styles/data-breakdown.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const DataBreakdown = ({
  land,
  water,
  eutro,
  ghg,
  windowDimensions,
  minRatio,
  item,
}) => {
  const { width, min } = windowDimensions;

  const text = {
    [ghg]: {
      title: 'Carbon Emissions',
      body:
        `${foodData[item].raw.ghg}`,
    },
    [land]: {
      title: 'Land Usage',
      body:
        `${foodData[item].raw.land}`,
    },
    [water]: {
      title: 'Water Usage',
      body:
        `${foodData[item].raw.water}`,
    },
    [eutro]: {
      title: 'Eutrophication',
      body:
        `${foodData[item].raw.eutro}`,
    },
  };

  const body = [ghg, land, water, eutro].map((type) => (
    <Grid item sm={12} className={styles.breakdownItem}>
      <div className={styles.impactText}>
        <Typography variant="subtitle1">{text[type].title}</Typography>
        <Typography variant="body2" className={styles.body}>
          {(width - min) / width >= minRatio.body ? text[type].body : null}
        </Typography>
      </div>
    </Grid>
  ));

  return (
    <Grid container spacing={1} className={styles.breakdownBox}>
      {body}
    </Grid>
  );
};

DataBreakdown.propTypes = {};

DataBreakdown.defaultProps = {};

export default DataBreakdown;
