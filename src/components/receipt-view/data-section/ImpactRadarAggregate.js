// import PropTypes from 'prop-types';
import { VictoryPie, VictoryLabel } from 'victory';
import React from 'react';

// Components

// Styles
import styles from '../styles/impact-donut-aggregate.module.css';

// Utils
import {
  getUsageImpact,
  getStandardizedImpactValue,
  getTotalImpactGrade,
  getSpecializedImpactValue,
} from './utils/calculations';

const LAND = 'land';
const WATER = 'water';
const EUTRO = 'eutro';
const GHG = 'ghg';

const ImpactRadarAggregate = ({ cartState }) => (
  <div className={styles.donut}>
    <p>Standardized Impact Value: {getStandardizedImpactValue(cartState)}</p>
    <p>Total Impact Grade: {getTotalImpactGrade(cartState)}</p>
    <p>Land:{JSON.stringify(getUsageImpact(cartState, LAND))}</p>
    <p>Carbon: {JSON.stringify(getUsageImpact(cartState, GHG))}</p>
    <p>Water: {JSON.stringify(getUsageImpact(cartState, WATER))}</p>
    <p>Eutrophication: {JSON.stringify(getUsageImpact(cartState, EUTRO))}</p>
    <p>Specialized Impact Value: {getSpecializedImpactValue(cartState)}</p>

    <svg viewBox="0 0 400 400"></svg>
  </div>
);

ImpactRadarAggregate.propTypes = {};

ImpactRadarAggregate.defaultProps = {};

export default ImpactRadarAggregate;
