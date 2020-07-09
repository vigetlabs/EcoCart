// import PropTypes from 'prop-types';
import React from 'react';

// // Components

// // Styles
import styles from '../styles/grocery-item.module.css';

const GroceryItem = () => (
  // REFACTOR: Replace fake static data here
  <div className={styles.item}>
    <h4>Grocery Item!</h4>
    <p>Here are some details about this grocery item:</p>
    <ul>
      <li>It is food!</li>
      <li>It is edible!</li>
      <li>It may or may not be good for you!</li>
    </ul>
  </div>
);

// GroceryItem.propTypes = {
// };

// GroceryItem.defaultProps = {
// };

export default GroceryItem;
