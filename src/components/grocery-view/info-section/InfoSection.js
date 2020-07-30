// import PropTypes from 'prop-types';
import React from 'react';

// // Components
import { Grid } from '@material-ui/core';
// // Styles
import styles from '../styles/info-section.module.css';

const InfoSection = () => (
  <Grid
    container
    className={styles.hero}
    alignItems='center'
    justify='center'
  >
    <Grid
      item
      container
      justify='center'
      xs={12}
      sm={10}
      md={10}
      lg={6}
      xl={6}
      className={styles.textContainer}
    >
      <Grid
        item
        xs={12}
        sm={12}
      >
        <div
          className={styles.introTitle}
        >
            ECOCART
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
      >
        <div
          className={styles.introText}
        >
          EcoCart uses data from Our World In Data
          to measure and grade your environmental impact based on your grocery list,
          and provides you with actionable steps to improve your environmental footprint.
          Select your favorite grocery items and see how much land and water they require
          and how much pollution and greenhouse gasses their production creates.
          You can look at individual items, or you can see the impact of your entire grocery list.
        </div>
      </Grid>
    </Grid>
  </Grid>
);

// InfoSection.propTypes = {
// };

// InfoSection.defaultProps = {
// };

export default InfoSection;
