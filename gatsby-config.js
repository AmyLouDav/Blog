module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-eBVc0YhrBRontHnbuBNuIQY11vZvN2RDHgdGChDHVaU",
        spaceId: "jnyuf76defm3",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
