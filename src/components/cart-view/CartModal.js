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
  open, toggleModal, cartState, setCartState, toggleHeaderTop, initCart,
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
  }).filter((item) => item);

  const clearItems = () => {
    setCartState(initCart());
  };

  return (
    <div>
      <Drawer anchor='right' open={open} onClose={() => {
        toggleModal();
        toggleHeaderTop();
      }}>
        <Grid
          container
          className={styles.modalContentBox}
          justifyContent='center'
        >

          <Grid
            item
            container
            xs={12}
            className={styles.cartHeader}
          >
            <Grid
              item
              xs={8}
            >
              <Typography
                variant='h2'
                align='center'
              >
                Grocery List
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
            >
              <Button
                color='secondary'
                variant="contained"
                onClick={clearItems}
                className={styles.cartButton}
              >
                Clear Items
              </Button>
            </Grid>
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
          {generateItems.length > 0 ? (
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
                  View Impact
                </Typography>
              </Button>
            </Link>

          ) : (

            <Button
                onClick={toggleModal}
                variant="contained"
                color="secondary"
                className={styles.cartButton}
              >
                <Typography
                  variant='h5'
                  align='center'
                >
                  Add Items
                </Typography>
              </Button>

          )}

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
