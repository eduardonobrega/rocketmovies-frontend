import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'div'
    'content';
  grid-template-rows: 11.6rem 8.5rem auto;

  > div {
    
    grid-area: div;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(90%, 113.7rem);
    margin: 0 auto;

    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    > button:last-of-type {
      color: ${({ theme }) => theme.COLORS.RED};
    }
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
  margin: 0 auto 4rem;

  > header {
    margin-bottom: 2.4rem;

    > div {
      display: flex;
      align-items: center;
    }

    > div:first-of-type {
      gap: 1.9rem;
      margin-bottom: 2.4rem;

      h1 {
        font-weight: 500;
        font-size: clamp(2.6rem, 1.6rem + 3.125vw, 3.6rem);
      }

      svg {
        width: clamp(1.5rem, 1rem + 1.5625vw, 2rem);
        height: clamp(1.5rem, 1rem + 1.5625vw, 2rem);
      }
    }

    > div:last-of-type {
      gap: 0.8rem;
      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
      }

      span {
        font-family: 'Roboto', sans-serif;
        font-size: clamp(1.2rem, 0.8rem + 1.25vw, 1.6rem);
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK_900};
      }
    }
    @media (max-width: 400px) {
      > div:first-of-type {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

  > div:not(:empty) {
    max-width: 100%;
    overflow: auto;
    height: 4rem;
    ::-webkit-scrollbar {
      height: 5px;
    }
  }

  > article {
    margin-top: 4rem;

    p {
      font-size: clamp(1.4rem, 1.2rem + 0.625vw, 1.6rem);
      text-align: justify;
      line-height: 2.1rem;
      margin-bottom: 2.4rem;
    }
  }
`;
