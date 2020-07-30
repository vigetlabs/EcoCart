import React from 'react';

// Componenets
import {
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';
import ListAltIcon from '@material-ui/icons/ListAlt';
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
            onClick={resetHeaderTop}
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
        xs={2}
        md={5}
        sm={4}
      >
        <Link
          to='/'
          className={`${styles.link} ${styles.welcome}`}
        >
          <Button
            className={styles.button}
            onClick={resetHeaderTop}
          >
            <Typography>Welcome</Typography>
          </Button>
        </Link>
        <Link
          to='/#groceries'
          className={styles.link}
        >
          <Button
            className={styles.button}
          >
            <Typography>Groceries</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        xs={0}
        sm={1}
        md={4}
        lg={5}
      />
      <Grid
        item
      >
        <Button className={styles.button} onClick={toggleModal}>
          <ListAltIcon
            className={styles.icon}
            style={{ fontSize: 60 }}
          />
        </Button>
      </Grid>
  </Grid>
);

export default NavigationBar;
