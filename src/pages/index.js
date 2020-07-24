import React from 'react';

// Components
import GrocerySection from '../components/grocery-view/grocery-section/GrocerySection';
import SEO from '../components/seo';

const IndexPage = ({ cartState, setCartState, toggleHeaderTop }) => (
  <>
    <SEO title="Home" />
    <GrocerySection
      cartState={cartState}
      setCartState={setCartState}
      toggleHeaderTop={toggleHeaderTop}
    />
  </>
);

export default IndexPage;
