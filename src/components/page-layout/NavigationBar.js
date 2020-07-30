import React from 'react';

// Componenets
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
    className={styles.container}>
    <Grid item xs={1}>
      <Link to="/">
        <Button className={styles.button}>
          <img src={ecoLogo} alt="EcoCart" className={styles.ecoLogo} />
        </Button>
      </Link>
    </Grid>
    <Grid item md={5} sm={4}>
      <Link to="/" className={styles.link}>
        <Button className={styles.button} onClick={resetHeaderTop}>
          <Typography> Welcome</Typography>
        </Button>
      </Link>
      <Link to="/#groceries" className={styles.link}>
        <Button className={styles.button}>
          <Typography> Groceries</Typography>
        </Button>
      </Link>
    </Grid>
    <Grid item md={5} />
    <Grid item sm={1}>
      <Button className={styles.button} onClick={toggleModal}>
        <ListAltIcon className={styles.icon} style={{ fontSize: 60 }} />
      </Button>
    </Grid>
  </Grid>
);

export default NavigationBar;
