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
import { Grid } from '@material-ui/core';
import CartModal from '../cart-view/CartModal';
import Header from './Header';
import NavigationBar from './NavigationBar';

// Styles
import styles from './styles/layout.module.css';

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

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavigationBar toggleModal={toggleModal} />
      <CartModal open={modalOpen} toggleModal={toggleModal} />
      <div className={styles.body}>
      <Grid
        container
        justify="center"
        alignItems="center"
        sm={12}
        className={styles.layoutBody}
      >
          {children}
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
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
