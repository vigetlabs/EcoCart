// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

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

const LAND = 'land';
const WATER = 'water';
const EUTRO = 'eutro';
const GHG = 'ghg';

const DataBreakdownAggregate = ({ cartState }) => (
  <Grid container spacing={4} className={styles.breakdownBox}>
    {getCartItems(cartState).length ? (
      <div>
        <p>
          Standardized Impact Value: {getStandardizedImpactValue(cartState)}
        </p>
        <p>Total Impact Score: {getTotalImpactGrade(cartState)}</p>
        <p>Total Impact Grade: {getGrade(cartState)}</p>
        <p>Land:{JSON.stringify(getUsageImpact(cartState, LAND))}</p>
        <p>Carbon: {JSON.stringify(getUsageImpact(cartState, GHG))}</p>
        <p>Water: {JSON.stringify(getUsageImpact(cartState, WATER))}</p>
        <p>
          Eutrophication: {JSON.stringify(getUsageImpact(cartState, EUTRO))}
        </p>
        <p>Specialized Impact Value: {getSpecializedImpactValue(cartState)}</p>
        <p>Maxima: {getMaximum(cartState)}</p>
      </div>
    ) : null}
    <Grid item sm={12} className={styles.breakdownItem}>
      <Typography variant="subtitle1">Carbon Emissions</Typography>
    </Grid>

    <Grid item sm={12} className={styles.breakdownItem}>
      <Typography variant="subtitle1">Land Use</Typography>
    </Grid>

    <Grid item sm={12} className={styles.breakdownItem}>
      <Typography variant="subtitle1">Water Use</Typography>
    </Grid>

    <Grid item sm={12} className={styles.breakdownItem}>
      <Typography variant="subtitle1">Eutrophication</Typography>
    </Grid>
  </Grid>
);

DataBreakdownAggregate.propTypes = {};

DataBreakdownAggregate.defaultProps = {};

export default DataBreakdownAggregate;
