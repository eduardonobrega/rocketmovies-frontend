import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  
  
  body,
  input,
  button,
  textarea {
    font-size: 1.6rem;
  
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Roboto Slab', serif;
    -webkit-font-smoothing: antialiased; /* deixa o contorno da fonte mais suave */
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }
  button:hover, a:hover {
    filter: brightness(.9);
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
