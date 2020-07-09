import React from 'react';

// Componenets
import { Button, Grid } from '@material-ui/core';

// Styles
import styles from './styles/navigation-bar.module.css';

const NavigationBar = () => (
  <div className={styles.container}>
    <Grid container justify="space-between">
      <Grid item>
        <div>
          <Button className={styles.button}>Home</Button>
          <Button className={styles.button}>Groceries</Button>
        </div>
      </Grid>

      <Grid item>
        <Button className={styles.cart}>Cart</Button>
      </Grid>
    </Grid>
  </div>
);

export default NavigationBar;
