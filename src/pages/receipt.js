import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import ReceiptSection from '../components/receipt-view/receipt-section/ReceiptSection';
import ImpactAlternatives from '../components/receipt-view/receipt-section/ImpactAlternatives';
import DataSection from '../components/receipt-view/data-section/DataSection';
import SEO from '../components/seo';

const ReceiptPage = ({ cartState }) => (
  <>
  <SEO title="Receipt" />
    <Grid
      container
      item
      sm={9}
      style={{ marginTop: '15vh' }}
    >
      <ReceiptSection cartState={cartState} />
      <ImpactAlternatives cartState={cartState} />
      <DataSection cartState={cartState} />
    </Grid>
  </>
);

export default ReceiptPage;
