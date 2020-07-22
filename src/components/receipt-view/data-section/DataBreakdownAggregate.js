// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';
import LegendSquare from './LegendSquare';

// Styles
import styles from '../styles/data-breakdown-aggregate.module.css';

// Utils
import {
  getUsageImpact,
  getStandardizedImpactValue,
  getTotalImpactGrade,
  getSpecializedImpactValue,
  getMaximum,
  getGrade,
  getCartItems,
} from './utils/calculations';

const DataBreakdownAggregate = ({
  cartState,
  colors,
  land,
  water,
  eutro,
  ghg,
  windowSize,
}) => {
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
        colorsArray={colors}
        windowSizeValue={windowSize}
      />
      <div className={styles.impactText}>
        <Typography variant="subtitle1">{text[type].title}</Typography>
        <Typography variant="body2" className={styles.body}>
          {text[type].body}
        </Typography>
      </div>
    </Grid>
  ));

  return (
    <Grid container spacing={4} className={styles.breakdownBox}>
      {body}
      <Grid item sm={12}>
        {getCartItems(cartState).length ? (
          <div>
            <p>
              Standardized Impact Value: {getStandardizedImpactValue(cartState)}
            </p>
            <p>Total Impact Score: {getTotalImpactGrade(cartState)}</p>
            <p>Total Impact Grade: {getGrade(cartState)}</p>
            <p>Land:{JSON.stringify(getUsageImpact(cartState, land))}</p>
            <p>Carbon: {JSON.stringify(getUsageImpact(cartState, ghg))}</p>
            <p>Water: {JSON.stringify(getUsageImpact(cartState, water))}</p>
            <p>
              Eutrophication: {JSON.stringify(getUsageImpact(cartState, eutro))}
            </p>
            <p>
              Specialized Impact Value: {getSpecializedImpactValue(cartState)}
            </p>
            <p>Maxima: {getMaximum(cartState)}</p>
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
};

DataBreakdownAggregate.propTypes = {};

DataBreakdownAggregate.defaultProps = {};

export default DataBreakdownAggregate;
