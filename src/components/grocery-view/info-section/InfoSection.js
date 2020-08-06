// import PropTypes from 'prop-types';
import React from 'react';

// // Components
import { Grid } from '@material-ui/core';
// // Styles
import styles from '../styles/info-section.module.css';

const InfoSection = () => (
  <Grid container className={styles.hero} alignItems="center" justify="center">
    <Grid
      item
      container
      justify="center"
      xs={10}
      sm={10}
      md={10}
      lg={6}
      xl={6}
      className={styles.textContainer}>
      <Grid item xs={12} sm={12}>
        <h1 className={styles.introTitle}>ECOCART</h1>
      </Grid>
      <Grid item xs={12} sm={12}>
        <div className={styles.introText}>
          Ecocart uses data from Our World in Data to measure and grade the
          environmental impact of common grocery items. Use it to recreate your
          shopping list and see the cost of your trip before you set foot in the
          store. Not how much you’ll have to pay for it, but how much water it
          used and polluted, how many pounds of greenhouse gasses it emitted and
          how much land it consumed. Thanks to EcoCart, it’s never been easier
          to take actionable steps to improve your environmental FOODprint.
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
