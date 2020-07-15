/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import { Grid, ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import CartModal from '../cart-view/CartModal';
import Header from './Header';
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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [cartState, setCartState] = useState(createInitFoodList());
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavigationBar toggleModal={toggleModal} />
      <CartModal cartState={cartState} open={modalOpen} toggleModal={toggleModal} />
      <div className={styles.body}>
      <Grid
        container
        justify="center"
        alignItems="center"
        sm={12}
        className={styles.layoutBody}
      >
          {React.cloneElement(children, { cartState, setCartState })}
      </Grid>
        <footer
          className={styles.layoutFooter}
        >
          <p>
            ©2020, A <a href="https://www.viget.com/">Viget</a> Project
          </p>
          <p>
            Liam Becker, Jennifer Montoya, William Dinneen, Jackson Doyle, Mika
            Byar
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
