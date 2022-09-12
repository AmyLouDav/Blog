// import React from "react";
// import { graphql } from "gatsby";
// import NavBar from "../components/navBar";

// const ListPage = ({ data }) => {
//   const {
//     contentfulBlogPage: {
//       content: {
//         description: { description },
//       },
//     },
//   } = data;
//   console.log("***", data);
//   return (
//     <main>
//       <NavBar />
//       <h1>TITLE</h1>
//       <p>{description}</p>
//     </main>
//   );
// };

// export default ListPage;

// export const query = graphql`
//   query {
//     allContentfulBlogPage {
//       nodes {
//         slug
//         title
//       }
//     }
//   }
// `;
