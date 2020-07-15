// import PropTypes from 'prop-types';
import React, { useState } from 'react';

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
import ItemModal from '../../item-view/ItemModal';

// Styles
import styles from '../styles/grocery-item.module.css';

// Utils
import { getUrl } from './placeholder-data';
import capitalize from '../../utils';

const getImage = (item) => getUrl(item);

const openModal = (setModalOpen) => {
  setModalOpen(true);
};

const GroceryItem = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    // REFACTOR: Replace fake static data here
    <>
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
            <Button
              variant="text"
              size="small"
              endIcon={<ChevronRightIcon />}
              onClick={() => openModal(setModalOpen)}>
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
      <ItemModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        item={item}
      />
    </>
  );
};
// GroceryItem.propTypes = {
// };

// GroceryItem.defaultProps = {
// };

export default GroceryItem;
