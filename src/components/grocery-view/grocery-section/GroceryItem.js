// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// REFACTOR: Need a grade icon
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// Styles
import styles from '../styles/grocery-item.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const GroceryItem = ({ item, cartState, setCartState }) => {
  const itemData = foodData[item];

  const handleAdd = () => {
    const newData = { ...cartState };
    newData[item] += 1;
    setCartState(newData);
  };

  return (
  <div className={styles.item}>
    <Card className={styles.itemCard} container elevated enabled>
      <CardMedia
        component="img"
        alt={item}
        height="240"
        image={itemData.other.imageUrl}
        title={item}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {item}
        </Typography>
        <Button variant="text" size="small" endIcon={<ChevronRightIcon />}>
          View Details
        </Button>
      </CardContent>
      <CardActions disableSpacing={true}>
        <Button
          startIcon={<AddShoppingCartIcon />}
          variant="contained"
          color="primary"
          size="small"
          className={styles.cartButton}
          onClick={handleAdd}>
          {cartState[item]}
        </Button>
      </CardActions>
    </Card>
  </div>
  );
};

// GroceryItem.propTypes = {
// };

// GroceryItem.defaultProps = {
// };

export default GroceryItem;
