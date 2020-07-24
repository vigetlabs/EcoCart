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
  >
    <Grid
      item
      sm={3}
    />
    <Grid
      item
      sm={6}
      className={styles.textContainer}
    >
      <Typography variant="h2" align='center'>Eco Cart</Typography>
      <Typography variant="h5">{TEXT}</Typography>
    </Grid>
  </Grid>
);

// InfoSection.propTypes = {
// };

// InfoSection.defaultProps = {
// };

export default InfoSection;
