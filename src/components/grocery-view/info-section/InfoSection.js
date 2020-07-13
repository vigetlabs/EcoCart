// import PropTypes from 'prop-types';
import React from 'react';

// // Components
import { Typography } from '@material-ui/core';
// // Styles
import styles from '../styles/info-section.module.css';

const TEXT =
  'EcoCart measures and grades your environmental impact based on your grocery shopping habits and provides you with actionable steps to improvement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a volutpat orci. Sed sit amet faucibus libero, at interdum justo. In luctus nunc a ante aliquam, non accumsan dolor rhoncus. Etiam dictum interdum dolor, in sagittis sapien finibus vel. Integer pharetra, eros nec auctor iaculis, nisi turpis ultricies turpis, eu facilisis justo urna eu sapien.';

const InfoSection = () => (
  <div className={styles.hero}>
    <div className={styles.textContainer}>
      <Typography variant="h5">{TEXT}</Typography>
    </div>
  </div>
);

// InfoSection.propTypes = {
// };

// InfoSection.defaultProps = {
// };

export default InfoSection;
