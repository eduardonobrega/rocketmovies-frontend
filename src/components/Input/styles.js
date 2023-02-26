import styled from 'styled-components';

export const Container = styled.div`
  border: none;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  height: 5.6rem;
  padding: 0 1.6rem;
  border-radius: 1rem;

  > input {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
    font-size: clamp(1.4rem, 1.2rem + 0.625vw, 1.6rem);
    &::placeholder {
      font-size: clamp(1rem, 0.4rem + 1.875vw, 1.6rem);
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }
  > input:read-only {
    cursor: not-allowed;
  }
  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`;
