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
      justify="left"
      alignItems="center"
      className={styles.container}
    >
      <Grid
        item
        xs={1}
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
        md={5}
        sm={4}
      >
        <Link
          to='/'
          className={styles.link}
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
          className={styles.link}
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
        md={5}
      />
      <Grid
        item
        sm={1}
      >
        <Button className={styles.button} onClick={toggleModal}>
          <ShoppingBasketIcon
            className={styles.icon}
          />
        </Button>
      </Grid>
  </Grid>
);

export default NavigationBar;
