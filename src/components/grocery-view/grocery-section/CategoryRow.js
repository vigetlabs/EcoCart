// import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import { Typography, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GroceryItem from './GroceryItem';

// Styles
import styles from '../styles/category-row.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const CategoryRow = ({
  category, cartState, setCartState, toggleHeaderTop,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const groceryItems = Object.keys(cartState).map((itemKey) => {
    if (foodData[itemKey].other.category.includes(category)) {
      return (
        <GroceryItem
          cartState={cartState}
          setCartState={setCartState}
          key={itemKey}
          item={itemKey}
          toggleHeaderTop={toggleHeaderTop}
      />
      );
    }
    return null;
  }).filter((isNotNull) => isNotNull);

  const handleRight = () => {
    const delta = Math.min(4, groceryItems.length - startIndex - 4);
    if (delta > 0) setStartIndex((index) => index + delta);
  };

  const handleLeft = () => {
    const delta = Math.min(4, startIndex);
    setStartIndex((index) => index - delta);
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
