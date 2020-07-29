// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  Grid,
  Drawer,
  Typography,
  Button,
} from '@material-ui/core';
import { Link } from 'gatsby';
import CartItem from './CartItem';

// Styles
import styles from './styles/cart-modal.module.css';

// Vars

const CartModal = ({
  open, toggleModal, cartState, setCartState, toggleHeaderTop,
}) => {
  const generateItems = Object.keys(cartState).map((itemKey) => {
    if (cartState[itemKey] > 0) {
      return (
        <CartItem
          key={itemKey}
          name={itemKey}
          setCartState={setCartState}
          cartState={cartState}
          toggleHeaderTop={toggleHeaderTop}
        />
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
            xs={12}
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
            xs={12}
            className={styles.cartList}
          >
            {generateItems}
          </Grid>

          <Grid
            item
            xs={12}
            className={styles.cartButtonBox}
          >
            <Link
              to={'/receipt'}
              style={{ textDecoration: 'none' }}
            >
              <Button
                onClick={toggleModal}
                variant="contained"
                color="primary"
                className={styles.cartButton}
              >
                <Typography
                  variant='h5'
                  align='center'
                >
                  Checkout
                </Typography>
              </Button>
            </Link>
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
