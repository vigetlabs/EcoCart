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
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// Styles
import styles from '../styles/grocery-item.module.css';

// Utils
import { getUrl } from './placeholder-data';

const getImage = (item) => getUrl(item);

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const GroceryItem = ({ item }) => (
  // REFACTOR: Replace fake static data here
  <div className={styles.item}>
    <Card className={styles.itemCard} container elevated enabled>
      <CardMedia
        component="img"
        alt={item}
        height="240"
        image={getImage(item)}
        title={item}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {capitalize(item)}
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
          className={styles.cartButton}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  </div>
);

// GroceryItem.propTypes = {
// };

// GroceryItem.defaultProps = {
// };

export default GroceryItem;
