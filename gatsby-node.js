const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulBlogPage {
        nodes {
          slug
        }
      }
    }
  `);

  const blogPages = result.data.allContentfulBlogPage.nodes;

  blogPages.forEach((blogPage) => {
    const { slug } = blogPage;
    createPage({
      path: slug,
      component: path.resolve("./src/components/blogPage.tsx"),
    });
  });
};
