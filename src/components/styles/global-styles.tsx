import styled from "styled-components";

const size ={
  tablet: '768px',
  laptop: '1024px'
}

export const device = {
  tablet: `min-width: ${size.tablet}`,
  laptop: `min-width: ${size.laptop}`
}

// export const GlobalStyles = styled.div`
//   @import url("https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap");
//   width: 100%;
//   max-width: 100%;
//   padding: 0;
//   margin: 0 auto;
//   color: #f25731;
//   font-family: "Signika";
// `;
