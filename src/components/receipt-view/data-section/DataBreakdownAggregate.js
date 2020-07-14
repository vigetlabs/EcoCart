// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

// Styles
import styles from '../styles/data-breakdown-aggregate.module.css';

const DataBreakdownAggregate = () => (
    <Grid
      container
      spacing={4}
      className={styles.breakdownBox}
    >
        <Grid
          item
          sm={12}
          className={styles.breakdownItem}
        >
          <Typography
            variant='subtitle1'
          >
            Carbon Emissions
          </Typography>
        </Grid>

        <Grid
          item
          sm={12}
          className={styles.breakdownItem}
        >
          <Typography
            variant='subtitle1'
          >
            Land Use
          </Typography>
        </Grid>

        <Grid
          item
          sm={12}
          className={styles.breakdownItem}
        >
          <Typography
            variant='subtitle1'
          >
            Water Use
          </Typography>
        </Grid>

        <Grid
          item
          sm={12}
          className={styles.breakdownItem}
        >
          <Typography
            variant='subtitle1'
          >
            Eutrophication
          </Typography>
        </Grid>
    </Grid>
);

DataBreakdownAggregate.propTypes = {
};

DataBreakdownAggregate.defaultProps = {
};

export default DataBreakdownAggregate;
