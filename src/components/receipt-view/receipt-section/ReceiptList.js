import PropTypes from 'prop-types';
import React from 'react';

// Components
import { List, Grid } from '@material-ui/core';
import ReceiptListItem from './ReceiptListItem';

// Styles
import styles from '../styles/receipt-list.module.css';

// Data
import foodData from '../../../../content/food-data.json';

const ReceiptList = ({ cartState }) => {
  const generateList = Object.keys(cartState).map((item) => {
    if (cartState[item] > 0) {
      return (
        <ReceiptListItem
          name={item}
          cost={foodData[item].ecoScore.points}
          grade={foodData[item].ecoScore.grade}
          key={item}
        />
      );
    }
    return null;
  });

  return (
    <Grid className={styles.listBox} item>
      <List>
        <ReceiptListItem head={true} />
        {generateList}
      </List>
    </Grid>
  );
};

ReceiptList.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.number),
};

ReceiptList.defaultProps = {};

export default ReceiptList;
