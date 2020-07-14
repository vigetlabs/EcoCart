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

const dummyData = [
  {
    name: 'orange',
    amount: 5,
  },
  {
    name: 'peach',
    amount: 3,
  },
  {
    name: 'grape',
    amount: 5,
  },
  {
    name: 'beer',
    amount: 1,
  },
  {
    name: 'beef',
    amount: 15,
  },
  {
    name: 'Doritos',
    amount: 2,
  },
  {
    name: 'apples',
    amount: 7,
  },
  {
    name: 'orange',
    amount: 5,
  },
  {
    name: 'peach',
    amount: 3,
  },
  {
    name: 'grape',
    amount: 5,
  },
  {
    name: 'beer',
    amount: 1,
  },
  {
    name: 'beef',
    amount: 15,
  },
  {
    name: 'Doritos',
    amount: 2,
  },
  {
    name: 'apples',
    amount: 7,
  },
];

const CartModal = ({ open, toggleModal }) => {
  const generateItems = dummyData.map((item) => (
    <CartItem name={item.name} amount={item.amount} />
  ));

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
