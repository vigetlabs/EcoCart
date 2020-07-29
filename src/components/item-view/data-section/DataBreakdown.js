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
      rawValue:
        `${foodData[item].raw.ghg} kgCO2`,
      description: 'Write some stuff about how carbon emissions are created during food production',
    },
    [land]: {
      title: 'Land',
      rawValue:
        `${foodData[item].raw.land} m2`,
      description: 'Food uses lots of land. Land land land land, things about land.',
    },
    [water]: {
      title: 'Water',
      rawValue:
        `${foodData[item].raw.water} l/kg`,
      description: 'Plants get thirsty, and so do animals. To fix this problem we use water. Lots of it.',
    },
    [eutro]: {
      title: 'Eutrophication',
      rawValue:
        `${foodData[item].raw.eutro} gPO₄eq`,
      description: 'Oooooo Big Word. It refers to the amount of waste the food emitts that ends up as water pollution.',
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
              xs={7}
            >
              <Typography
                variant="h4"
              >
                {text[type].title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
            >
              <Typography
                variant="h5"
                className={styles.rawValue}
              >
                {text[type].rawValue}
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
    </Grid>
  );
};

DataBreakdown.propTypes = {};

DataBreakdown.defaultProps = {};

export default DataBreakdown;
