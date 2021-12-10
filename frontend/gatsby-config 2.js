module.exports = {
  siteMetadata: {
    siteUrl: "https://www.strapi.io",
    title: "Strapi Gatsby Ecommerce",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Products", // Arbitrary name for the remote schema Query type
        fieldName: "products", // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        url: "localhost:1337/graphql", // Url to query from
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
