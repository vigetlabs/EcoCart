import React from 'react';

// Components
import GrocerySection from '../components/grocery-view/grocery-section/GrocerySection';

const IndexPage = ({ cartState, setCartState, toggleHeaderTop }) => (
  <>
    <GrocerySection
      cartState={cartState}
      setCartState={setCartState}
      toggleHeaderTop={toggleHeaderTop}
    />
  </>
);

export default IndexPage;
