// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  Card, CardContent, Typography,
} from '@material-ui/core';

// Styles
import styles from './styles/cart-item.module.css';

const CartItem = ({ name, amount }) => (
    <Card
      className={styles.listItemCard}
    >
      <CardContent>
        <Typography
          variant='h5'
        >
          {name}
        </Typography>
        <Typography
          variant='body1'
        >
          {amount}
        </Typography>
      </CardContent>
  </Card>
);

CartItem.propTypes = {
};

CartItem.defaultProps = {
};

export default CartItem;
