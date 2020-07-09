/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import Header from './Header';
import NavigationBar from './NavigationBar';
import GrocerySection from '../grocery-view/grocery-section/GrocerySection';

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavigationBar />
      <div className={styles.body}>
        <main>{children}</main>
        <footer>
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
