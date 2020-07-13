// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { List, Grid, Divider } from '@material-ui/core';
import ReceiptListItem from './ReceiptListItem';
import ImpactResult from './ImpactResult';

// Styles
import styles from '../styles/receipt-list.module.css';

const dummyData = [
  {
    name: 'burger',
    cost: '100',
  },
  {
    name: 'ham',
    cost: '1000',
  },
  {
    name: 'apple',
    cost: '10',
  },
  {
    name: 'snails',
    cost: '100000',
  },
  {
    name: 'cheese',
    cost: '1',
  },
  {
    name: 'carrot',
    cost: '67',
  },
  {
    name: 'orange',
    cost: '672',
  },
  {
    name: 'cheeze-its',
    cost: '55',
  },
  {
    name: 'Kool-Aid',
    cost: '33',
  },
];

const ReceiptList = () => {
  const generateList = dummyData.map((item, index) => {
    console.log('lint');
    return (
    <>
      <ReceiptListItem name={item.name} cost={item.cost} key={item.name} />
      {index !== dummyData.length - 1
        ? <Divider variant='inset'/>
        : null
      }
    </>
    );
  });

  return (
  <Grid
    className={styles.listBox}
    justify="center"
    alignItems="center"
    container
  >
    <Grid
      item
      sm={11}
    >
      <List>
        {generateList}
      </List>
    </Grid>
    <Grid
      item
      sm={11}
    >
      <ImpactResult />
    </Grid>
  </Grid>
  );
};

ReceiptList.propTypes = {
};

ReceiptList.defaultProps = {
};

export default ReceiptList;
