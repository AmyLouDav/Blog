const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulInfoPage {
        nodes {
          slug
        }
      }

      allContentfulBlogPage {
        nodes {
          slug
        }
      }
    }
  `);

  const infoPages = result.data.allContentfulInfoPage.nodes;

  infoPages.forEach((infoPage) => {
    const { slug } = infoPage;
    createPage({
      path: slug,
      component: path.resolve("./src/components/infoPage.tsx"),
    });
  });

  const blogPages = result.data.allContentfulBlogPage.nodes;
  
  blogPages.forEach((blogPage) => {
    const { slug } = blogPage;
    createPage({
      path: slug,
      component: path.resolve("./src/components/blogPage.tsx"),
    });
  });
};
