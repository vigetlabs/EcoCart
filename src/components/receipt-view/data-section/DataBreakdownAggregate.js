import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';
import LegendSquare from './LegendSquare';

// Styles
import styles from '../styles/data-breakdown-aggregate.module.css';

const DataBreakdownAggregate = ({
  colors,
  land,
  water,
  eutro,
  ghg,
  windowDimensions,
  minRatio,
}) => {
  const { width, min } = windowDimensions;

  const text = {
    [ghg]: {
      title: 'Carbon Emissions',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    [land]: {
      title: 'Land Usage',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    [water]: {
      title: 'Water Usage',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    [eutro]: {
      title: 'Eutrophication',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
  };

  const body = [ghg, land, water, eutro].map((type) => (
    <Grid item sm={12} className={styles.breakdownItem}>
      <LegendSquare
        legendStyle={styles.legend}
        impactType={type}
        colors={colors}
        windowDimensions={windowDimensions}
      />
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

DataBreakdownAggregate.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  land: PropTypes.string.isRequired,
  water: PropTypes.string.isRequired,
  eutro: PropTypes.string.isRequired,
  ghg: PropTypes.string.isRequired,
  windowDimensions: PropTypes.objectOf(PropTypes.number).isRequired,
  minRatio: PropTypes.number.isRequired,
};

DataBreakdownAggregate.defaultProps = {};

export default DataBreakdownAggregate;
