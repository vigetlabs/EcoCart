// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  Grid,
  Drawer,
  Typography,
  Button,
} from '@material-ui/core';
import CartItem from './CartItem';

// Styles
import styles from './styles/cart-modal.module.css';

// Vars

const CartModal = ({ open, toggleModal, cartState }) => {
  const generateItems = Object.keys(cartState).map((itemKey) => {
    if (cartState[itemKey] > 0) {
      return (
        <CartItem name={itemKey} amount={cartState[itemKey]} />
      );
    }
    return null;
  });

  return (
    <div>
      <Drawer anchor='right' open={open} onClose={toggleModal}>
        <Grid
          container
          className={styles.modalContentBox}
          justifyContent='center'
        >

          <Grid
            item
            sm={12}
          >
            <Typography
              variant='h2'
              align='center'
            >
              Cart
            </Typography>
          </Grid>

          <Grid
            item
            sm={12}
            className={styles.cartList}
          >
            {generateItems}
          </Grid>

          <Grid
            item
            sm={12}
            className={styles.cartButtonBox}
          >
            <Button
              href='/receipt'
              variant="contained"
              color="secondary"
              className={styles.cartButton}
            >
              <Typography
                variant='h5'
                align='center'
              >
                Checkout
              </Typography>
            </Button>
          </Grid>

        </Grid>
      </Drawer>
    </div>
  );
};

CartModal.propTypes = {
};

CartModal.defaultProps = {
};

export default CartModal;
