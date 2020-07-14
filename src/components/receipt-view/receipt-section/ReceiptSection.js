// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography, Divider } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import ReceiptList from './ReceiptList';
import ImpactResult from './ImpactResult';

// Styles
import styles from '../styles/receipt-section.module.css';

// Variables
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ReceiptSection = () => {
  const getDate = () => {
    const d = new Date();
    return `${MONTHS[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`;
  };

  return (
      <Grid
        item
        container
        justify='space-around'
        className={styles.receiptSectionBox}
      >

        <Grid
          item
          container
          sm={12}
          className={styles.receiptDownloadBox}
        >

          <Grid item sm={11}/>

          <Grid item sm={1}>
            <GetAppIcon/>
          </Grid>

        </Grid>

        <Grid
          item
          sm={12}
          spacing={2}
          className={styles.receiptHeaderBox}
        >
          <Typography
            align='center'
            variant="h3"
            gutterBottom>
            Impact Receipt
          </Typography>
          <Typography
            align='center'
            variant="h5"
            gutterBottom>
            EcoCart - {getDate()}
          </Typography>
        </Grid>

        <Grid sm={12} item>
          <Divider variant='middle' />
        </Grid>

        <Grid
          item
          sm={12}
          className={styles.receiptListBox}
        >
          <ReceiptList/>
        </Grid>

        <Grid sm={12} item>
          <Divider variant='middle' />
        </Grid>

        <Grid
          item
          sm={12}
          className={styles.impactResultBox}
        >
          <ImpactResult />
        </Grid>

      </Grid>
  );
};

ReceiptSection.propTypes = {
};

ReceiptSection.defaultProps = {
};

export default ReceiptSection;
