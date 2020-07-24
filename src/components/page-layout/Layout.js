/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import { Grid, ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import CartModal from '../cart-view/CartModal';
import NavigationBar from './NavigationBar';

// Styles
import styles from './styles/layout.module.css';

// Data
import foodList from '../../../content/food-list.json';

// Functions
const createInitFoodList = () => {
  const initCart = [];
  foodList.foods.forEach((item) => {
    initCart[item] = 0;
  });
  return initCart;
};

const Layout = ({ children }) => {
  const [cartState, setCartState] = useState(createInitFoodList());
  const [modalOpen, setModalOpen] = useState(false);
  const [headerTop, setHeaderTop] = useState('-150px');

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleHeaderTop = () => {
    if (headerTop === '0' || headerTop === 0) {
      setHeaderTop('-150px');
    } else {
      setHeaderTop('0');
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > 400 && headerTop !== '0') {
        setHeaderTop('0');
      }
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.fullPage}>
        <div
          className={styles.layoutHeaderOn}
          style={{ top: headerTop }}
        >
          <NavigationBar resetHeaderTop={toggleHeaderTop} toggleModal={toggleModal} />
          <CartModal cartState={cartState} open={modalOpen} toggleModal={toggleModal} />
        </div>
        <div className={styles.body}>
        <Grid
          container
          justify="center"
          alignItems="center"
          sm={12}
          className={styles.layoutBody}
        >
            {React.cloneElement(children, { cartState, setCartState, toggleHeaderTop })}
        </Grid>
          <footer
            className={styles.layoutFooter}
          >
            <p>
              ©${new Date().getFullYear()}, A <a href="https://www.viget.com/">Viget</a> Project
            </p>
            <p>
              Liam Becker, Jennifer Montoya, William Dinneen, Jackson Doyle, Mika
              Byar
            </p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
