import React from 'react';
import navigationStyles from './navigation-bar.module.css';

const NavigationBar = () => {
    return (
        <div className={navigationStyles.container}>
            <button className={navigationStyles.button}>Home</button>
            <button className={navigationStyles.button}>Groceries</button>
            <button className={navigationStyles.cart}>Cart</button>
        </div>
    );
};

export default NavigationBar;
