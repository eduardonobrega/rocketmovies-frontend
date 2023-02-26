import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;

  grid-template-columns: 64rem auto;

  > main {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 40em) {
    display: block;
    > main {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  width: min(90%, 34rem);

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: clamp(3.2rem, 1.6rem + 5vw, 4.8rem);
    color: ${({ theme }) => theme.COLORS.PINK_900};
    font-weight: 700;
  }

  > h1 + p {
    font-size: clamp(1.2rem, 1rem + 0.625vw, 1.4rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  > p + h2 {
    font-size: clamp(2.2rem, 2rem + 0.625vw, 2.4rem);
    margin: 4.8rem 0;
  }

  > div:first-of-type {
    margin-bottom: 0.8rem;
  }

  > button {
    margin: 2.4rem 0 4rem;
  }

  > a {
    align-self: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
