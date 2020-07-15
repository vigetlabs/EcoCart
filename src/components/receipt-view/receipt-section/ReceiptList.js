// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { List, Grid, Divider } from '@material-ui/core';
import ReceiptListItem from './ReceiptListItem';

// Styles
import styles from '../styles/receipt-list.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const ReceiptList = ({ cartState }) => {
  const generateList = Object.keys(cartState).map((item, index) => {
    if (cartState[item] > 0) {
      return (
        <>
          <ReceiptListItem name={item} cost={foodData[item].ecoScore.score} key={item} />
          {index !== cartState.length - 1
            ? <Divider variant='inset'/>
            : null
          }
        </>
      );
    }
    return null;
  });

  return (
  <Grid
    className={styles.listBox}
    item
  >
      <List>
        {generateList}
      </List>
  </Grid>
  );
};

ReceiptList.propTypes = {
};

ReceiptList.defaultProps = {
};

export default ReceiptList;
