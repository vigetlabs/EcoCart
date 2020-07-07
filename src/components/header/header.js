import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headerStyles from './header.module.css';

const Header = ({ siteTitle }) => (
    <header className={headerStyles.header}>
        <div className={headerStyles.container}>
            <h1 style={{ margin: 0 }}>
                <Link to="/" className={headerStyles.link}>
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
    siteTitle: ``,
};

export default Header;
