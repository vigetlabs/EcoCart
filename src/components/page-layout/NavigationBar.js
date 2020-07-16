import React from 'react';

// Componenets
import { Button, Grid } from '@material-ui/core';
import { Link } from 'gatsby';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';

// Styles
import styles from './styles/navigation-bar.module.css';

const NavigationBar = ({ toggleModal }) => (
  <div className={styles.container}>
    <Grid container justify="space-between">
      <Grid item>
        <div>
        <Link
          to='/'
        >
          <Button
            className={styles.button}
          >
            <HomeIcon className={styles.icon} />
          </Button>
        </Link>
        <Link
          to='/#groceries'
        >
          <Button
            className={styles.button}
          >
            <StorefrontIcon className={styles.icon} />
          </Button>
        </Link>
        </div>
      </Grid>
      <Grid item>
        <Button className={styles.button} onClick={toggleModal}>
          <ShoppingBasketIcon className={styles.icon} />
        </Button>{' '}
      </Grid>
    </Grid>
  </div>
);

export default NavigationBar;
