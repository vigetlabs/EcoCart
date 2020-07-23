import React from 'react';

// Componenets
import {
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ecoLogo from '../../images/EcoCart_Logo.png';

// Styles
import styles from './styles/navigation-bar.module.css';

const NavigationBar = ({ toggleModal, resetHeaderTop }) => (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={styles.container}
    >
    <image src='public/EcoCart_Log.png' alt="Girl in a jacket" width="500" height="600" />
      <Grid
        item
        sm={1}
      >
        <Link
          to='/'
        >
          <Button
            className={styles.button}
          >
            <img
              src={ecoLogo}
              alt='EcoCart'
              className={styles.ecoLogo}
            />
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        sm={5}
      >
        <Link
          to='/'
          style={{ textDecoration: 'none' }}
        >
          <Button
            className={styles.button}
            onClick={resetHeaderTop}
          >
           <Typography> Welcome</Typography>
          </Button>
        </Link>
        <Link
          to='/#groceries'
          style={{ textDecoration: 'none' }}
        >
          <Button
            className={styles.button}
          >
            <Typography> Groceries</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        sm={5}
        />
      <Grid
        item
        sm={1}
      >
        <Button className={styles.button} onClick={toggleModal}>
          <ShoppingBasketIcon className={styles.icon} />
        </Button>{' '}
      </Grid>
  </Grid>
);

export default NavigationBar;
