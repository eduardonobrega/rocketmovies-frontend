import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'a'
    'content';
  grid-template-rows: 11.6rem 8.5rem auto;

  > a {
    grid-area: a;
    display: flex;
    align-items: center;
    width: min(90%, 113.7rem);
    margin: 0 auto;
  }

  > main {
    overflow-y: auto;
    width: min(90%, 113.7rem);
    margin: 0 auto;
    padding-right: 1.6rem;
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding-bottom: 4rem;

  h1 {
    margin: 0 0 4rem;
    font-weight: 500;
    font-size: clamp(2.6rem, 1.6rem + 3.125vw, 3.6rem);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 0rem + 6.25vw, 4rem);

  .twoColumns {
    columns: 2;
    gap: clamp(2rem, 0rem + 6.25vw, 4rem);
  }

  input,
  textarea {
    font-family: 'Roboto', sans-serif;
  }

  > div > button:first-child {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }
`;
