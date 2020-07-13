import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import ReceiptSection from '../components/receipt-view/receipt-section/ReceiptSection';
import ImpactAlternatives from '../components/receipt-view/receipt-section/ImpactAlternatives';
import DataSection from '../components/receipt-view/data-section/DataSection';
import SEO from '../components/seo';

// styles
import styles from './styles/receipt.module.css';

const ReceiptPage = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    sm={12}
    className={styles.receiptPage}
  >
    <Grid
      containter
      item
      sm={9}
      className={styles.receiptBody}
      spacing={4}
    >
      <SEO title="Receipt" />
      <ReceiptSection />
      <ImpactAlternatives/>
      <DataSection />
    </Grid>
  </Grid>
);

export default ReceiptPage;
