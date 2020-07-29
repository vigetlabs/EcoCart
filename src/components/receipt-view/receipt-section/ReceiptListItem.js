// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import LetterGrade from '../../LetterGrade';

// Styles
import styles from '../styles/receipt-list-item.module.css';

const ReceiptListItem = ({ name, cost, grade, head }) => {
  if (head) {
    return (
      <ListItem disableTypography className={styles.head}>
        <ListItemText
          edge="start"
          primary={
            <Typography variant="h4" weight="bold">
              Items
            </Typography>
          }
          className={styles.header}
        />
        <ListItemText
          edge="end"
          primary={
            <Typography variant="h4" weight="bold">
              Score
            </Typography>
          }
          className={[styles.header, styles.itemCost].join(' ')}
        />
      </ListItem>
    );
  }
  return (
    <ListItem disableTypography className={styles.listItem}>
      <ListItemText
        edge="start"
        primary={
          <Typography variant="h5" weight="bold">
            {name}
          </Typography>
        }
        className={styles.itemTitle}
      />
      <ListItemText
        edge="end"
        primary={<LetterGrade cost={cost} grade={grade} />}
        className={[styles.grade, styles.itemCost].join(' ')}
      />
    </ListItem>
  );
};

ReceiptListItem.propTypes = {};

ReceiptListItem.defaultProps = {};

export default ReceiptListItem;
