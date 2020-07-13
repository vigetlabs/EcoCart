// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { ListItem, ListItemText, Typography } from '@material-ui/core';

// Styles
import styles from '../styles/receipt-list-item.module.css';

const ReceiptListItem = ({ name, cost }) => (
    <ListItem
      className={styles.listItem}
    >
      <ListItemText
        edge='start'
        primary={
        <Typography
          variant="h5"
          weight='bold'
        >
          {name}
        </Typography>
        }
        className={styles.itemTitle}
      />
      <ListItemText
        edge='end'
        primary={
        <Typography
          variant="h6"
        >
          {cost}
        </Typography>
        }
        className={styles.itemCost}
      />
    </ListItem>
);

ReceiptListItem.propTypes = {
};

ReceiptListItem.defaultProps = {
};

export default ReceiptListItem;
