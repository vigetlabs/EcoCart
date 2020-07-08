import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Link } from 'gatsby';

// Styles
import styles from './styles/header.module.css';

const Header = ({ siteTitle }) => (
    <header className={styles.header}>
        <div className={styles.container}>
            <h1 style={{ margin: 0 }}>
                <Link to="/" className={styles.link}>
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
