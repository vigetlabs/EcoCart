import React from 'react';

// Componenets
import { Button, Grid } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';

// Styles
import styles from './styles/navigation-bar.module.css';

const NavigationBar = ({ openModal }) => (
  <div className={styles.container}>
    <Grid container justify="space-between">
      <Grid item>
        <div>
          <Button className={styles.button}>
            <HomeIcon className={styles.icon} />
          </Button>
          <Button className={styles.button}>
            <StorefrontIcon className={styles.icon} />
          </Button>
        </div>
      </Grid>
      <Grid item>
        <Button className={styles.button} onClick={openModal}>
          <ShoppingBasketIcon className={styles.icon} />
        </Button>{' '}
      </Grid>
    </Grid>
  </div>
);

export default NavigationBar;
