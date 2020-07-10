import React from 'react';

// Components
import GrocerySection from '../components/grocery-view/grocery-section/GrocerySection';
import Layout from '../components/page-layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GrocerySection />
  </Layout>
);

export default IndexPage;
