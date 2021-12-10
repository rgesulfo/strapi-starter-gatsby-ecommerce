import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ProductsList from "../components/ProductsList";
// import { getProducts } from "../utils/api"

const Home = ({ products }) => {
  // const products = useStaticQuery(query);

  return (
    <Layout categories="">
      <main>
        <title>Strapi Gatsby E-commerce</title>
        <h1>Hello World</h1>
        {/* <ProductsList products={products} /> */}
      </main>
    </Layout>
  );
};

// const query = graphql`
//   query {
//     allStrapiProducts {
//     }
//   }
// `;
// export async function getStaticProps() {
//   const products = await getProducts()
//   return { props: { products } }
// }

export default Home;