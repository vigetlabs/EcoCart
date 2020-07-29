import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import ReceiptSection from '../components/receipt-view/receipt-section/ReceiptSection';
import ImpactAlternatives from '../components/receipt-view/receipt-section/ImpactAlternatives';
import DataSection from '../components/receipt-view/data-section/DataSection';
import SEO from '../components/seo';

const ReceiptPage = ({ cartState }) => {
  const checkItems = Object.keys(cartState).map((itemKey) => {
    if (cartState[itemKey] > 0) {
      return true;
    }
    return null;
  }).filter((item) => item);

  if (checkItems.length === 0 && typeof window !== 'undefined') {
    window.location = 'http://ecocart.app';
  }

  return (
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
};

export default ReceiptPage;
