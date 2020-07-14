// import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import { Grid, Typography, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GroceryItem from './GroceryItem';

// Styles
import styles from '../styles/category-row.module.css';

// REFACTOR: Use real data here
const ITEMS = ['broccoli', 'corn', 'bread', 'milk', 'beef', 'cheese'];

const CategoryRow = ({ category }) => {
  const [startIndex, setStartIndex] = useState(0);
  // REFACTOR: Using fake data right now
  const groceryItems = ITEMS.map((item) => (
    <GroceryItem key={item} item={item} />
  ));

  const handleRight = () => {
    const delta = Math.min(4, groceryItems.length - startIndex - 4);
    if (delta > 0) setStartIndex((startIndex) => startIndex + delta);
  };

  const handleLeft = () => {
    const delta = Math.min(4, startIndex);
    setStartIndex((startIndex) => startIndex - delta);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h4">{category}</Typography>
      <div className={styles.row}>
        <div className={styles.iconContainer}>
          <IconButton
            onClick={handleLeft}
            size="medium"
            edge="start"
            aria-label="left">
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {groceryItems[startIndex]}
        {groceryItems[startIndex + 1]}
        {groceryItems[startIndex + 2]}
        {groceryItems[startIndex + 3]}
        <div className={styles.iconContainer}>
          <IconButton
            onClick={handleRight}
            size="medium"
            edge="end"
            aria-label="right">
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

CategoryRow.propTypes = {};

CategoryRow.defaultProps = {};

export default CategoryRow;
