import React from 'react';

// Components
import ReceiptSection from '../components/receipt-view/receipt-section/ReceiptSection';
import DataSection from '../components/receipt-view/data-section/DataSection';
import SEO from '../components/seo';

const ReceiptPage = () => (
  <>
    <SEO title="Receipt" />
    <ReceiptSection />
    <DataSection />
  </>
);

export default ReceiptPage;
