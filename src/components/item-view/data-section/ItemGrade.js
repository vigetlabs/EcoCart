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
          justify='left'
        >
          <Grid
            sm={12}
          >
            <Typography variant='h5'>Eco Score</Typography>
          </Grid>
          <Grid
            sm={12}
          >
            {itemData.ecoScore.points} -- {itemData.ecoScore.grade}
          </Grid>
        </Grid>
  );
};

ItemGrade.propTypes = {};

ItemGrade.defaultProps = {};

export default ItemGrade;
