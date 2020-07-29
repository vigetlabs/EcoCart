// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

// Styles

// Data
import foodData from '../../../../content/food-data.json';

// Vars

const ItemGrade = ({ item }) => {
  const itemData = foodData[item];

  return (
        <Grid
          container
          justify='center'
        >
          <Grid
            xs={12}
          >
            <Typography variant='h3'>
              Eco Score: {itemData.ecoScore.points}
            </Typography>
            <Typography variant='h3'>{itemData.ecoScore.grade}</Typography>
          </Grid>
        </Grid>
  );
};

ItemGrade.propTypes = {};

ItemGrade.defaultProps = {};

export default ItemGrade;
