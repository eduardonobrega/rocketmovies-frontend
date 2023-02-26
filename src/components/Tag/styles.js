import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.PINK_800};
  font-family: 'Roboto', sans-serif;
  font-size: clamp(1rem, 0.8rem + 0.625vw, 1.2rem);

  min-width: 6.4rem;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  margin-right: 0.8rem;

  &:last-of-type {
    margin-right: 0;
  }
`;
