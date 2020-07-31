import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography, Box } from '@material-ui/core';
import LegendSquare from './LegendSquare';

// Styles
import styles from '../styles/data-breakdown-aggregate.module.css';

// Utils
import { getUsageImpact } from '../utils/calculations';

const DataBreakdownAggregate = ({
  cartState,
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
      title: 'Carbon Emission',
      body:
        'of your total Environmental Impact based on the amount of Green House Gas(GHG) emissions emitted from the supply chain of food production.',
    },
    [land]: {
      title: 'Land Use',
      body:
        'of your total Environmental Impact based on the amount of land used in food production.',
    },
    [water]: {
      title: 'Water Use',
      body:
        'of your total Environmental Impact based on the number of freshwater withdrawals used in food production.',
    },
    [eutro]: {
      title: 'Eutrophication',
      body:
        'of your total Environmental Impact based on the amount of water pollution and chemical runoff that contribute to food production.',
    },
  };

  const getDescription = (type) => {
    const individualImpact = getUsageImpact(cartState, type, true);
    const totalImpact = [ghg, land, water, eutro]
      .map((x) => getUsageImpact(cartState, x, true))
      .reduce((acc, curr) => acc + curr);
    const percentage = Math.floor((individualImpact / totalImpact) * 100);
    const description = `${text[type].title} accounts for ${percentage}% ${text[type].body}`;
    return description;
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
        <Box display={{ xs: 'none', md: 'inline-block' }}>
          <Typography variant="subtitle1">{text[type].title}</Typography>
          <Typography variant="body2" className={styles.body}>
            {width && (width - min) / width >= minRatio.body
              ? getDescription(type)
              : null}
          </Typography>
        </Box>
        <Box display={{ xs: 'flex', md: 'none' }}>
          <Typography variant="body1">{text[type].title}</Typography>
        </Box>
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
