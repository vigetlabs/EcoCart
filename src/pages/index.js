import React from 'react';

// Components
import GrocerySection from '../components/grocery-view/grocery-section/GrocerySection';
import SEO from '../components/seo';

const IndexPage = ({ cartState, setCartState }) => (
  <>
    <SEO title="Home" />
    <GrocerySection cartState={cartState} setCartState={setCartState} />
  </>
);

export default IndexPage;
