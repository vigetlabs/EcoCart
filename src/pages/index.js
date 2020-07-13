import React from 'react';

// Components
import GrocerySection from '../components/grocery-view/grocery-section/GrocerySection';
<<<<<<< HEAD
import Layout from '../components/page-layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GrocerySection />
  </Layout>
=======
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <GrocerySection />
  </>
>>>>>>> 1112a48e6c03b0e07519d13982f1a5a55ab231d6
);

export default IndexPage;
