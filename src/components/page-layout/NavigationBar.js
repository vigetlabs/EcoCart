import React from 'react';

// Componenets
import { Button, Grid } from '@material-ui/core';
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
          <Button
            href='/'
            className={styles.button}
          >
            <HomeIcon className={styles.icon} />
          </Button>
          <Button
            className={styles.button}
            href='/#groceries'
          >
            <StorefrontIcon className={styles.icon} />
          </Button>
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
