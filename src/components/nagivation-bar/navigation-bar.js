import React from 'react';
import Button from '@material-ui/core/Button';
import navigationStyles from './navigation-bar.module.css';

const NavigationBar = () => {
    return (
        <div className={navigationStyles.container}>
            <Button className={navigationStyles.button}>Home</Button>
            <Button className={navigationStyles.button}>Groceries</Button>
            <Button className={navigationStyles.cart}>Cart</Button>
        </div>
    );
};

export default NavigationBar;
