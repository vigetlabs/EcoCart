import React from 'react';

// Componenets
import { Button } from '@material-ui/core';

// Styles
import styles from './styles/navigation-bar.module.css';

const NavigationBar = () => (
        <div className={styles.container}>
            <Button className={styles.button}>Home</Button>
            <Button className={styles.button}>Groceries</Button>
            <Button className={styles.cart}>Cart</Button>
        </div>
);

export default NavigationBar;
