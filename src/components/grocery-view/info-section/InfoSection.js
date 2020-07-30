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
      xs={10}
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
          Next time you order a hamburger, take a moment to consider its cost.
          Not the $6 you paid for it, but the 6 Kilograms of greenhouse gas it
          created, the 68 square meters of agricultural land it required, the
          423 liters of water it guzzled, and the 118 grams of chemical runoff
          that are now running through the waterways. Ecocart uses data from Our
          World in Data to measure and grade the environmental impact of beef and
          other common grocery items. Use it to take actionable steps to improve
          your environmental FOODprint.
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
