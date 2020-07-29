// import PropTypes from 'prop-types';
import React from 'react';

// // Components
import { Typography, Grid } from '@material-ui/core';
// // Styles
import styles from '../styles/info-section.module.css';

const TEXT = 'EcoCart measures and grades your environmental impact based on your grocery shopping habits and provides you with actionable steps to improvement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a volutpat orci. Sed sit amet faucibus libero, at interdum justo. In luctus nunc a ante aliquam, non accumsan dolor rhoncus. Etiam dictum interdum dolor, in sagittis sapien finibus vel. Integer pharetra, eros nec auctor iaculis, nisi turpis ultricies turpis, eu facilisis justo urna eu sapien.';

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
      sm={12}
      md={8}
      lg={6}
      xl={6}
      className={styles.textContainer}
    >
      <Grid
        item
        xs={12}
        sm={12}
      >
        <Typography
          variant="h1"
          align='center'
          className={styles.intoTitle}
        >
            Eco Cart
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
      >
        <Typography
          variant="subtitle2"
          className={styles.introText}
        >
          {TEXT}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

// InfoSection.propTypes = {
// };

// InfoSection.defaultProps = {
// };

export default InfoSection;
