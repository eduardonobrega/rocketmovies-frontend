import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.PINK_800};

  border: none;
  outline: none;
  border-radius: 1.6rem;

  padding: clamp(1.2rem, -0.8rem + 6.25vw, 3.2rem);
  margin-bottom: clamp(1.4rem, 0.4rem + 3.125vw, 2.4rem);

  width: 100%;

  text-align: start;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
    font-size: clamp(2rem, 1.6rem + 1.25vw, 2.4rem);
    margin-bottom: 0.8rem;
  }
  > ul svg {
    font-size: 1.2rem;
  }

  .description {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin: 1.5rem 0 2.4rem;
  }

  .description > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  .tags > span {
    display: inline-block;
    background-color: #312e38;
    color: #e5e5e5;
    margin-top: 0.8rem;
  }

  @media (max-width: 400px) {
    .tags {
      columns: 2;
      gap: 1rem;
    }
    .tags > span {
      width: 100%;
      margin-bottom: 1rem;
      margin-top: 0;
    }
  }
`;
