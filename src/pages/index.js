import React from 'react';

// Components
import GrocerySection from '../components/grocery-view/grocery-section/GrocerySection';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <GrocerySection />
  </>
);

export default IndexPage;
