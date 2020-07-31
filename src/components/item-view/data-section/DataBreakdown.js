/* eslint-disable no-unused-expressions */
// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  Grid,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';

// Styles
import styles from '../styles/data-breakdown.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const DataBreakdown = ({
  land,
  water,
  eutro,
  ghg,
  item,
}) => {
  const text = {
    [ghg]: {
      title: 'Carbon',
      description: `1 serving of ${item} creates ${foodData[item].raw.ghg} kgCO2 based on emissions from livestock & fisheries, crop production, land use, and supply chain. Carbon emissions are measured in CO2 equivalents per kilogram`,
    },
    [land]: {
      title: 'Land',
      description: `1 serving of ${item} requires ${foodData[item].raw.land} square meters of of agricultural land to be produced. Land use is measured in meters squared per kilogram`,
    },
    [water]: {
      title: 'Water',
      rawValue:
        `${foodData[item].raw.water} l/kg`,
      description: `1 serving of ${item} requires ${foodData[item].raw.water} liters of freshwater to be produced. Water use is measured in liters per kilogram. `,
    },
    [eutro]: {
      title: 'Eutrophication',
      rawValue:
        `${foodData[item].raw.eutro} gPO₄eq`,
      description: `1 serving of ${item} creates ${foodData[item].raw.eutro} gPO₄eq of chemical runoff that ends up in nearby environments and waterways . Eutrophication is measured in grams of phosphate equivalents per kilogram.
      `,
    },
  };

  const body = [ghg, land, water, eutro].map((type) => (
    <Grid
      item
      xs={12}
      className={styles.breakdownItem}
    >
      <Card
        className={styles.impactText}
      >
        <CardContent>
          <Grid
            container
            justify='space-evenly'
          >
            <Grid
              item
              xs={12}
              sm={12}
            >
              <Typography
                variant="h4"
                className={styles.impactTitle}
              >
                {text[type].title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Typography
                variant="body2"
              >
                {text[type].description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <Grid
      container
      spacing={2}
      className={styles.breakdownBox}
    >
      {body}
      <Grid
        item
      >
        <Typography
          variant="body2"
        >
          Data From <a target="_blank" rel='noreferrer' href='https://ourworldindata.org/environmental-impacts-of-food#citation' >Our World in Data </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

DataBreakdown.propTypes = {};

DataBreakdown.defaultProps = {};

export default DataBreakdown;
