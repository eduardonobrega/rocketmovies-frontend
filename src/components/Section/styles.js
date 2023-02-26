import styled from 'styled-components';

export const Container = styled.section`
  > h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-bottom: 2.4rem;
  }

  > div {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 1.6rem;
    border-radius: 0.8rem;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

    @media (max-width: 40em) {
      display: block;
      columns: 2;
      column-gap: 2rem;
      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        >input {
          width: 100%;
        }
      }

      button {
        margin: 0;
      }
    }
    @media (max-width: 440px) {
      columns: 1;
    }
  }
`;
