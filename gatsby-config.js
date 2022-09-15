module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "7_j7mZ2UJoZ0s7eoO7_YGXPlunS4tuOcta1bxXvl6zM",
        spaceId: "jnyuf76defm3",
        host: 'preview.contentful.com',
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
