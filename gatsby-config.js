module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "WqR0221hBj1Igq5VE7LDJPrAbYu_hZVq-tf_RCShH1k",
        spaceId: "jnyuf76defm3",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
  ],
};
