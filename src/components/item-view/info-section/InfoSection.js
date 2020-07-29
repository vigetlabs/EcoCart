// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

// Styles
import styles from '../styles/info-section.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const InfoSection = ({ item, cartState, setCartState }) => {
  const handleAdd = () => {
    const newUpdate = { ...cartState };
    newUpdate[item] += 1;
    setCartState(newUpdate);
  };

  const handleRemove = () => {
    if (cartState[item] > 0) {
      const newUpdate = { ...cartState };
      newUpdate[item] -= 1;
      setCartState(newUpdate);
    }
  };

  const thisItem = foodData[item];

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
      >
        {item}
      </Typography>
      <Grid
        container
        justify='center'
        spacing={3}
      >
        <Grid
          item
          xs={6}
        >
          <Typography
            variant='h5'
            className={styles.itemAmount}
          >
          {cartState[item]}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            variant="h5"
            gutterBottom
          >
          Serving Size: {thisItem.other.servingNum} {thisItem.other.servingUnit}
          </Typography>
        </Grid>
      </Grid>
        <Grid
          container
          justify='center'
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className={styles.cartButtonBox}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={styles.cartButton}
              onClick={handleAdd}
            >
              <AddCircleOutlineIcon
                fontSize='large'
              />
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className={styles.cartButtonBox}
          >
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={styles.cartButton}
              onClick={handleRemove}
            >
              <RemoveCircleOutlineIcon
                fontSize='large'
              />
            </Button>
          </Grid>
        </Grid>
    </>
  );
};

InfoSection.propTypes = {};

InfoSection.defaultProps = {};

export default InfoSection;
