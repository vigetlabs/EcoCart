// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography } from '@material-ui/core';

// Styles
import styles from '../styles/data-breakdown.module.css';

const DataBreakdown = () => (
  <div>
    <Grid container direction="column" spacing={0} className={styles.container}>
      <Grid item>
        <Grid container direction="row" className={styles.container}>
          <Grid item xs={1}>
            <svg width="30" height="50">
              <rect width="30" height="50" className={styles.overall} />
            </svg>
          </Grid>
          <Grid item xs={11}>
            <div>
              <Typography variant="h6">Overall Impact</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" className={styles.container}>
          <Grid item xs={1}>
            <svg width="30" height="50">
              <rect width="30" height="50" className={styles.overall} />
            </svg>
          </Grid>
          <Grid item xs={11}>
            <div>
              <Typography variant="h6">Overall Impact</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" className={styles.container}>
          <Grid item xs={1}>
            <svg width="30" height="50">
              <rect width="30" height="50" className={styles.overall} />
            </svg>
          </Grid>
          <Grid item xs={11}>
            <div>
              <Typography variant="h6">Overall Impact</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" className={styles.container}>
          <Grid item xs={1}>
            <svg width="30" height="50">
              <rect width="30" height="50" className={styles.overall} />
            </svg>
          </Grid>
          <Grid item xs={11}>
            <div>
              <Typography variant="h6">Overall Impact</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

DataBreakdown.propTypes = {};

DataBreakdown.defaultProps = {};

export default DataBreakdown;
